import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { FollowUp } from "./follow-up-create-update/follow-up.model";

@Injectable()
export class FollowUpService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: FollowUp) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addFollowUp.url,
      param: quote,
      type: Utility.urlParams.addFollowUp.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: FollowUp) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateFollowUp.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateFollowUp.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<FollowUp[]> {
    const request = {
      url: Utility.urlParams.getFollowUp.url,
      param: {},
      type: Utility.urlParams.getFollowUp.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as FollowUp[];
    }
    return [] as FollowUp[];;
  }
  async deleteQuotes(quote: FollowUp): Promise<FollowUp[]> {
    const request = {
      url: Utility.urlParams.updateFollowUp.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
