import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Log } from "./log-create-update/log.model";

@Injectable()
export class LogService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Log) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addLog.url,
      param: quote,
      type: Utility.urlParams.addLog.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Log) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateLog.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateLog.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Log[]> {
    const request = {
      url: Utility.urlParams.getLog.url,
      param: {},
      type: Utility.urlParams.getLog.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Log[];
    }
    return [] as Log[];;
  }

  async deleteQuotes(quote: Log ): Promise<Log[]> {
    const request = {
      url: Utility.urlParams.updateLog.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
