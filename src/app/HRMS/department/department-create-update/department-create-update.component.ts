import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Department } from './department.model';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './department-create-update.component.html',
  styleUrls: ['./department-create-update.component.scss']
})
export class DepartmentCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Department[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<DepartmentCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Department;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      name: [this.defaults.name || ''],
      departmentHead: [this.defaults.departmentHead || ''],
      establishedDate: [this.defaults.establishedDate || ''],
      description: [this.defaults.description || ''],
      accountHead: [this.defaults.accountHead || ''],
      status: [this.defaults.status || 'Active'],
      validFrom: [this.defaults.validFrom || ''],
      validTill: [this.defaults.validTill || null],
      createdAt: [this.defaults.createdAt || ''],
      createdBy: [this.defaults.createdBy || 'admin'],
      modifiedBy: [this.defaults.modifiedBy || null],
      updatedAt: [this.defaults.updatedAt || null],
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
