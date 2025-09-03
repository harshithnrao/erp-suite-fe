import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Feedback } from "./feedback-create-update/feedback.model";

@Injectable()
export class FeedbackService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Feedback) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addFeedback.url,
      param: quote,
      type: Utility.urlParams.addFeedback.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Feedback) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateFeedback.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateFeedback.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Feedback[]> {
    const request = {
      url: Utility.urlParams.getFeedback.url,
      param: {},
      type: Utility.urlParams.getFeedback.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Feedback[];
    }
    return [] as Feedback[];;
  }

  async deleteQuotes(quote: Feedback): Promise<Feedback[]> {
    const request = {
      url: Utility.urlParams.updateFeedback.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
