import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Zone } from "./zone-create-update/zone.model";

@Injectable()
export class ZoneService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Zone) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addZone.url,
      param: quote,
      type: Utility.urlParams.addZone.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Zone) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateZone.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateZone.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Zone[]> {
    const request = {
      url: Utility.urlParams.getZone.url,
      param: {},
      type: Utility.urlParams.getZone.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Zone[];
    }
    return [] as Zone[];;
  }

  async deleteQuotes(quote: Zone ): Promise<Zone[]> {
    const request = {
      url: Utility.urlParams.updateZone.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
