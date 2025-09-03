import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Invoice } from "./invoice-create-update/invoice.model";

@Injectable()
export class InvoiceService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Invoice) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addInvoice.url,
      param: quote,
      type: Utility.urlParams.addInvoice.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Invoice) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateInvoice.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateInvoice.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Invoice[]> {
    const request = {
      url: Utility.urlParams.getInvoice.url,
      param: {},
      type: Utility.urlParams.getInvoice.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Invoice[];
    }
    return [] as Invoice[];;
  }

  
  async deleteQuotes(quote: Invoice ): Promise<Invoice[]> {
    const request = {
      url: Utility.urlParams.updateInvoice.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
