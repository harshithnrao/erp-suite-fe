import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { DistributionCenter } from "./distribution-center-create-update/distribution-center.model";

@Injectable()
export class DistributionCenterService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: DistributionCenter) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addDistributionCenter.url,
      param: quote,
      type: Utility.urlParams.addDistributionCenter.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: DistributionCenter) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateDistributionCenter.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateDistributionCenter.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<DistributionCenter[]> {
    const request = {
      url: Utility.urlParams.getDistributionCenter.url,
      param: {},
      type: Utility.urlParams.getDistributionCenter.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as DistributionCenter[];
    }
    return [] as DistributionCenter[];;
  }

  async deleteQuotes(quote: DistributionCenter ): Promise<DistributionCenter[]> {
    const request = {
      url: Utility.urlParams.updateDistributionCenter.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
