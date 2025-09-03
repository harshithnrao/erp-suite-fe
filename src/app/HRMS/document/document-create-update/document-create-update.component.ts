import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Document } from './document.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './document-create-update.component.html',
  styleUrls: ['./document-create-update.component.scss']
})
export class DocumentCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Document[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];
  selectedFile: File | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<DocumentCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService,    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Document;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      employeeId: [this.defaults.employeeId || 0],
      documentType: [this.defaults.documentType || 0],
      documentNumber: [this.defaults.documentNumber || ''],
      issueDate: [this.defaults.issueDate || ''],
      expiryDate: [this.defaults.expiryDate || ''],
      description: [this.defaults.description || ''],
      // status: [this.defaults.status || 'Pending'],
      validFrom: [{ value: this.defaults.validFrom || '', }],
      validTill: [{ value: this.defaults.validTill || '', }],
      createdAt: [this.defaults.createdAt || ''],
      updatedAt: [this.defaults.updatedAt || ''],
      createdBy: [this.defaults.createdBy || 'admin'],
      modifiedBy: [this.defaults.modifiedBy || 'admin'],
      deletedAt: [this.defaults.deletedAt || null],
      version: [this.defaults.version || 1]
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
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.form.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('data', JSON.stringify(this.form.value));

      this.http.post('http://192.168.0.55:8080/api/v1/documents', formData).subscribe(
        (response) => {
          console.log('Document created successfully:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating document:', error);
        }
      );
    } else {
      console.error('Form is invalid or file not selected');
    }
  }
}
