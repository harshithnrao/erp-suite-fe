import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Customer } from "./customer-create-update/customer.model";

@Injectable()
export class CustomerService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Customer) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addCustomer.url,
      param: quote,
      type: Utility.urlParams.addCustomer.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Customer) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateCustomer.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateCustomer.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Customer[]> {
    const request = {
      url: Utility.urlParams.getCustomer.url,
      param: {},
      type: Utility.urlParams.getCustomer.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Customer[];
    }
    return [] as Customer[];;
  }

  async deleteQuotes(quote: Customer ): Promise<Customer[]> {
    const request = {
      url: Utility.urlParams.updateCustomer.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
