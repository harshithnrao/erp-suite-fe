import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Lead } from "./lead-create-update/lead.model";

@Injectable()
export class LeadService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Lead) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addLead.url,
      param: quote,
      type: Utility.urlParams.addLead.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Lead) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateLead.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateLead.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Lead[]> {
    const request = {
      url: Utility.urlParams.getLead.url,
      param: {},
      type: Utility.urlParams.getLead.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Lead[];
    }
    return [] as Lead[];;
  }
  async deleteQuotes(quote: Lead): Promise<Lead[]> {
    const request = {
      url: Utility.urlParams.updateLead.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
