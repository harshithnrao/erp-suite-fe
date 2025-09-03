import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { SO } from "./so-create-update/so.model";

@Injectable()
export class SOService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: SO) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addSO.url,
      param: quote,
      type: Utility.urlParams.addSO.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: SO) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateSO.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateSO.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<SO[]> {
    const request = {
      url: Utility.urlParams.getSO.url,
      param: {},
      type: Utility.urlParams.getSO.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as SO[];
    }
    return [] as SO[];;
  }

  async deleteQuotes(quote: SO ): Promise<SO[]> {
    const request = {
      url: Utility.urlParams.updateSO.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
