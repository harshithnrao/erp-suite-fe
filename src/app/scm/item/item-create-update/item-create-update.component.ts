import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Item } from './item.model';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './item-create-update.component.html',
  styleUrls: ['./item-create-update.component.scss']
})
export class ItemCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Item[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ItemCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Item;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      categoryCode: [this.defaults.categoryCode || ''],
      name: [this.defaults.name || ''],
      code: [this.defaults.code || ''],
      description: [this.defaults.description || ''],
      price: [this.defaults.price || 0],
      validFrom: [this.defaults.validFrom || ''],
      validTill: [this.defaults.validTill || ''],
      createdAt: [this.defaults.createdAt || ''],
      updatedAt: [this.defaults.updatedAt || ''],
      deletedAt: [this.defaults.deletedAt || ''],
      version: [this.defaults.version || 1],
      createdBy: [this.defaults.createdBy || ''],
      modifiedBy: [this.defaults.modifiedBy || '']
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
}
