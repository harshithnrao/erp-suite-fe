import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Order } from "./order-create-update/order.model";

@Injectable()
export class OrderService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Order) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addOrder.url,
      param: quote,
      type: Utility.urlParams.addOrder.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Order) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateOrder.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateOrder.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Order[]> {
    const request = {
      url: Utility.urlParams.getOrders.url,
      param: {},
      type: Utility.urlParams.getOrders.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Order[];
    }
    return [] as Order[];;
  }
  
  async deleteQuotes(quote: Order ): Promise<Order[]> {
    const request = {
      url: Utility.urlParams.updateOrder.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
