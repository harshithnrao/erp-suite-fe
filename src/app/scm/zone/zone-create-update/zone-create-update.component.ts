import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Zone } from './zone.model';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './zone-create-update.component.html',
  styleUrls: ['./zone-create-update.component.scss']
})
export class ZoneCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Zone[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ZoneCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Zone;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults?.id || 0],
      name: [this.defaults?.name || ''],
      code: [this.defaults?.code || ''],
      pincode: [this.defaults?.pincode || ''],
      city: [this.defaults?.city || ''],
      validFrom: [this.defaults?.validFrom || null],
      validTill: [this.defaults?.validTill || null],
      createdAt: [this.defaults?.createdAt || ''],
      updatedAt: [this.defaults?.updatedAt || ''],
      createdBy: [this.defaults?.createdBy || ''],
      modifiedBy: [this.defaults?.modifiedBy || ''],
      deletedAt: [this.defaults?.deletedAt || null],
      version: [this.defaults?.version || 0],
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
