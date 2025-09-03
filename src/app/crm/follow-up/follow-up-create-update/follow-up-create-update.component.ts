import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { FollowUp } from './follow-up.model';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './follow-up-create-update.component.html',
  styleUrls: ['./follow-up-create-update.component.scss']
})
export class FollowUpCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: FollowUp[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<FollowUpCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as FollowUp;
    }
    console.log(this.defaults);
    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      leadName: [this.defaults.leadName || ''],
      visitedBy: [this.defaults.visitedBy || ''],
      visitedTo: [this.defaults.visitedTo || ''],
      visitDate: [this.defaults.visitDate || ''],
      reasonForVisit: [this.defaults.reasonForVisit || ''],
      nextFollowUp: [this.defaults.nextFollowUp || ''],
      validFrom: [this.defaults.validFrom || ''],
      validTill: [this.defaults.validTill || null],
      createdAt: [this.defaults.createdAt || ''],
      updatedAt: [this.defaults.updatedAt || null],
      deletedAt: [this.defaults.deletedAt || null],
      createdBy: [this.defaults.createdBy || 'admin'],
      modifiedBy: [this.defaults.modifiedBy || null],
      version: [this.defaults.version || 1],
      leadId: [this.defaults.leadId || 0]
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
