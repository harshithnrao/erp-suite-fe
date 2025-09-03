import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { AccountsReceivable } from "./accounts_receivable-create-update/accounts_receivable.model";

@Injectable()
export class AccountsReceivableService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: AccountsReceivable) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAccountsReceivable.url,
      param: quote,
      type: Utility.urlParams.addAccountsReceivable.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: AccountsReceivable) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAccountsReceivable.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAccountsReceivable.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<AccountsReceivable[]> {
    const request = {
      url: Utility.urlParams.getAccountsReceivable.url,
      param: {},
      type: Utility.urlParams.getAccountsReceivable.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as AccountsReceivable[];
    }
    return [] as AccountsReceivable[];;
  }

  async deleteQuotes(quote: AccountsReceivable ): Promise<AccountsReceivable[]> {
    const request = {
      url: Utility.urlParams.updateAccountsReceivable.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
