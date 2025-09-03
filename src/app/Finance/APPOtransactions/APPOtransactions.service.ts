import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { APPOTransactions } from "./APPOtransactions-create-update/APPOtransactions.model";

@Injectable()
export class APPOTransactionsService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: APPOTransactions) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAPPOTransactions.url,
      param: quote,
      type: Utility.urlParams.addAPPOTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: APPOTransactions) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAPPOTransactions.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAPPOTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<APPOTransactions[]> {
    const request = {
      url: Utility.urlParams.getAPPOTransactions.url,
      param: {},
      type: Utility.urlParams.getAPPOTransactions.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as APPOTransactions[];
    }
    return [] as APPOTransactions[];;
  }

  async deleteQuotes(quote: APPOTransactions ): Promise<APPOTransactions[]> {
    const request = {
      url: Utility.urlParams.updateAPPOTransactions.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
