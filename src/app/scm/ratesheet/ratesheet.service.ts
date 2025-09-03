import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Ratesheet } from "./ratesheet-create-update/ratesheet.model";

@Injectable()
export class RatesheetService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Ratesheet) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addRatesheet.url,
      param: quote,
      type: Utility.urlParams.addRatesheet.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Ratesheet) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateRatesheet.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateRatesheet.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Ratesheet[]> {
    const request = {
      url: Utility.urlParams.getRatesheet.url,
      param: {},
      type: Utility.urlParams.getRatesheet.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Ratesheet[];
    }
    return [] as Ratesheet[];;
  }

  async deleteQuotes(quote: Ratesheet ): Promise<Ratesheet[]> {
    const request = {
      url: Utility.urlParams.updateRatesheet.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
