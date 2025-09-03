import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { PO } from "./po-create-update/po.model";

@Injectable()
export class POService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: PO) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addPO.url,
      param: quote,
      type: Utility.urlParams.addPO.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: PO) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updatePO.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updatePO.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<PO[]> {
    const request = {
      url: Utility.urlParams.getPO.url,
      param: {},
      type: Utility.urlParams.getPO.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as PO[];
    }
    return [] as PO[];;
  }

  async deleteQuotes(quote: PO ): Promise<PO[]> {
    const request = {
      url: Utility.urlParams.updatePO.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
