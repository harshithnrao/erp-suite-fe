import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Leaves } from "./leaves-create-update/leaves.model";

@Injectable()
export class LeavesService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Leaves) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addLeaves.url,
      param: quote,
      type: Utility.urlParams.addLeaves.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Leaves) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateLeaves.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateLeaves.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Leaves[]> {
    const request = {
      url: Utility.urlParams.getLeaves.url,
      param: {},
      type: Utility.urlParams.getLeaves.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Leaves[];
    }
    return [] as Leaves[];;
  }
  async deleteQuotes(quote: Leaves ): Promise<Leaves[]> {
    const request = {
      url: Utility.urlParams.updateLeaves.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
