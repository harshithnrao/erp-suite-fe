import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Vendor } from "./vendor-create-update/vendor.model";

@Injectable()
export class VendorService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Vendor) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addVendor.url,
      param: quote,
      type: Utility.urlParams.addVendor.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Vendor) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateVendor.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateVendor.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Vendor[]> {
    const request = {
      url: Utility.urlParams.getVendor.url,
      param: {},
      type: Utility.urlParams.getVendor.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Vendor[];
    }
    return [] as Vendor[];;
  }

  async deleteQuotes(quote: Vendor ): Promise<Vendor[]> {
    const request = {
      url: Utility.urlParams.updateDistributionCenter.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
