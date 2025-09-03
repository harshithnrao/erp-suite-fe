import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service'; import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Invoice } from './invoice.model';
import { createWorker } from 'tesseract.js';


@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './invoice-create-update.component.html',
  styleUrls: ['./invoice-create-update.component.scss']
})
export class InvoiceCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Invoice[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];
  extractedImage = '';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<InvoiceCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService, protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Invoice;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      orderId: [this.defaults.orderId || 0],
      orderName: [this.defaults.orderName || ''],
      status: [this.defaults.status || 'Pending'],
      invoiceDate: [this.defaults.invoiceDate || null],
      taxAmount: [this.defaults.taxAmount || 0],
      totalAmount: [this.defaults.totalAmount || 0],
      validFrom: [this.defaults.validFrom || null],
      validTill: [this.defaults.validTill || null],
      createdAt: [this.defaults.createdAt || null],
      updatedAt: [this.defaults.updatedAt || null],
      createdBy: [this.defaults.createdBy || ''],
      modifiedBy: [this.defaults.modifiedBy || ''],
      deletedAt: [this.defaults.deletedAt || null],
      version: [this.defaults.version || 1],
    });

  }


  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // this points to the File object we just created
      this.extractImage(url);
    }
  }

  async extractImage(url: string) {
    this.extractedImage = '';
    try {
      const worker = await createWorker('eng');
      const ret = await worker.recognize(url);
      if(ret.data.text) {
        this.extractedImage = ret.data.text;
        console.log(ret.data.text);
      } else {
        throw 'No Extraction text'
      }
      await worker.terminate();
    } catch(err) {
      this.commonService.showNotifier('Could not extract Image. Please try another one', 'error');
    }
  }
}
