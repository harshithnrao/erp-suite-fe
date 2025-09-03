import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { APSOTransactions } from "./APSOtransactions-create-update/APSOtransactions.model";

@Injectable()
export class APSOTransactionsService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: APSOTransactions) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAPSOTransactions.url,
      param: quote,
      type: Utility.urlParams.addAPSOTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: APSOTransactions) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAPSOTransactions.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAPSOTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<APSOTransactions[]> {
    const request = {
      url: Utility.urlParams.getAPSOTransactions.url,
      param: {},
      type: Utility.urlParams.getAPSOTransactions.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as APSOTransactions[];
    }
    return [] as APSOTransactions[];;
  }

  async deleteQuotes(quote: APSOTransactions ): Promise<APSOTransactions[]> {
    const request = {
      url: Utility.urlParams.updateAPSOTransactions.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
