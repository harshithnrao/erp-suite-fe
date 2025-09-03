import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Accounts } from "./accounts-create-update/accounts.model";

@Injectable()
export class AccountsService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Accounts) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAccounts.url,
      param: quote,
      type: Utility.urlParams.addAccounts.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Accounts) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAccounts.url,
      param: quote,
      type: Utility.urlParams.updateAccounts.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Accounts[]> {
    const request = {
      url: Utility.urlParams.getAccounts.url,
      param: {},
      type: Utility.urlParams.getAccounts.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Accounts[];
    }
    return [] as Accounts[];;
  }
}
