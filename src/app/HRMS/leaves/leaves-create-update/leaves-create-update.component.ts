import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Leaves } from './leaves.model';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './leaves-create-update.component.html',
  styleUrls: ['./leaves-create-update.component.scss']
})
export class LeavesCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Leaves[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<LeavesCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Leaves;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      employeeId: [this.defaults.employeeId || 0],
      leaveTypeId: [this.defaults.leaveTypeId || 0],
      startDate: [this.defaults.startDate || ''],
      endDate: [this.defaults.endDate || ''],
      description: [this.defaults.description || ''],
      status: [this.defaults.status || 'Pending'],
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
}
