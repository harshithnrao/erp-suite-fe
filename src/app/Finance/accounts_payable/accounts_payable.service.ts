import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { AccountsPayable } from "./accounts_payable-create-update/accounts_payable.model";

@Injectable()
export class AccountsPayableService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: AccountsPayable) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAccountsPayable.url,
      param: quote,
      type: Utility.urlParams.addAccountsPayable.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: AccountsPayable) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAccountsPayable.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAccountsPayable.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<AccountsPayable[]> {
    const request = {
      url: Utility.urlParams.getAccountsPayable.url,
      param: {},
      type: Utility.urlParams.getAccountsPayable.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as AccountsPayable[];
    }
    return [] as AccountsPayable[];;
  }

  async deleteQuotes(quote: AccountsPayable ): Promise<AccountsPayable[]> {
    const request = {
      url: Utility.urlParams.updateAccountsPayable.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
