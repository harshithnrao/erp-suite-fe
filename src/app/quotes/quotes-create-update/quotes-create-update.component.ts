import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order, QuoteDetailModel } from './quotes.model';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './quotes-create-update.component.html',
  styleUrls: ['./quotes-create-update.component.scss']
})
export class QuoteCreateUpdateComponent implements OnInit {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: QuoteDetailModel[] = [];
  displayedColumns: string[] = ['qty', 'itemCode', 'uom'];
  // displayedColumns: string[] = ['id', 'quoteId', 'qty', 'itemCode', 'uom', 'imgLink', 'createdAt', 'updatedAt'];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<QuoteCreateUpdateComponent>,
    private fb: UntypedFormBuilder, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Order;
    }

    this.form = this.fb.group({
      id: [this.defaults.id || 0],
      inventory_id: [this.defaults.inventory_id || 0,],
      farmer_id: [this.defaults.farmer_id || 0,],
      buyer_id: [this.defaults.buyer_id || 0,],
      items_id: [this.defaults.items_id || 0,],
      buyer_name: [this.defaults.buyer_name || '',],
      farmer_name: [this.defaults.farmer_name || '',],
      item_name: [this.defaults.item_name || '',],
      inventory_name: [this.defaults.inventory_name || '',],
      weight: [this.defaults.weight || 0,],
      ordered_date: [this.defaults.ordered_date || new Date(),],
      est_delivery_date: [this.defaults.est_delivery_date || new Date(),],
      order_amount: [this.defaults.order_amount || 0,],
      discount_applied: [this.defaults.discount_applied || 0,],
      amount_pending: [this.defaults.amount_pending || 0,],
      final_amount: [this.defaults.final_amount || 0,],
      status: [this.defaults.status || '',],
    });
    //this.getQuoteItems();
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

  async getQuoteItems() {
    if (this.mode === 'update') {
      const quoteId = this.defaults.id;
      const request: HttpRequestModel = {
        url: Utility.urlParams.getQuoteItems.url,
        param: { quoteId: quoteId },
        type: Utility.urlParams.getQuoteItems.type
      };

      const response = await lastValueFrom(this.commonService.getAPIResponse(request));
      if (response && response.data && response.data.length) {
        this.quoteDetails = response.data as QuoteDetailModel[];
      }
    }
  }
}
