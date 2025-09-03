import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { AuditLog } from "./audit_log-create-update/audit_log.model";

@Injectable()
export class AuditLogService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: AuditLog) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addAuditLog.url,
      param: quote,
      type: Utility.urlParams.addAuditLog.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: AuditLog) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateAuditLog.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateAuditLog.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<AuditLog[]> {
    const request = {
      url: Utility.urlParams.getAuditLog.url,
      param: {},
      type: Utility.urlParams.getAuditLog.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as AuditLog[];
    }
    return [] as AuditLog[];;
  }

  
  async deleteQuotes(quote: AuditLog ): Promise<AuditLog[]> {
    const request = {
      url: Utility.urlParams.updateAuditLog.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
