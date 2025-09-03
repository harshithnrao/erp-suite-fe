import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Transactions } from "./transactions-create-update/transactions.model";

@Injectable()
export class TransactionsService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Transactions) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addTransactions.url,
      param: quote,
      type: Utility.urlParams.addTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Transactions) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateTransactions.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateTransactions.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Transactions[]> {
    const request = {
      url: Utility.urlParams.getTransactions.url,
      param: {},
      type: Utility.urlParams.getTransactions.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Transactions[];
    }
    return [] as Transactions[];;
  }

  async deleteQuotes(quote: Transactions ): Promise<Transactions[]> {
    const request = {
      url: Utility.urlParams.updateTransactions.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
