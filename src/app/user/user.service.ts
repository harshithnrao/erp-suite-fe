import { Injectable } from "@angular/core";
import { CommonService } from "../common/common.service";
import { Utility } from "../common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "../common/common.model";
import { Inventory } from "./user-create-update/user.model";
import { PermissionService } from "../permission.service";

@Injectable()
export class UserService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Inventory) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addUser.url,
      param: quote,
      type: Utility.urlParams.addUser.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Inventory) {
    let url = Utility.urlParams.updateUser.url;
    url = url.replace('{id}', quote.id.toString());
    const request: HttpRequestModel = {
      url: url,
      param: quote,
      type: Utility.urlParams.updateUser.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async deleteQuote(quote: Inventory) {
    let url = Utility.urlParams.deleteUser.url;
    url = url.replace('{id}', quote.id.toString());
    const request: HttpRequestModel = {
      url:url,
      param: quote,
      type: Utility.urlParams.deleteUser.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Inventory[]> {
    const request = {
      url: Utility.urlParams.getUser.url,
      param: {},
      type: Utility.urlParams.getUser.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response) {
      
      return response as Inventory[];
    }
    return [] as Inventory[];;
  }
}
