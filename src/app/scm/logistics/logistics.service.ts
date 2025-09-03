import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Logistics } from "./logistics-create-update/logistics.model";

@Injectable()
export class LogisticsService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Logistics) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addLogistics.url,
      param: quote,
      type: Utility.urlParams.addLogistics.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Logistics) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateLogistics.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateLogistics.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Logistics[]> {
    const request = {
      url: Utility.urlParams.getLogistics.url,
      param: {},
      type: Utility.urlParams.getLogistics.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Logistics[];
    }
    return [] as Logistics[];;
  }
  async deleteQuotes(quote: Logistics ): Promise<Logistics[]> {
    const request = {
      url: Utility.urlParams.updateLogistics.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
