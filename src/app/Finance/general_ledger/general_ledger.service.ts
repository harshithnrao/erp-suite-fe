import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { GeneralLedger } from "./general_ledger-create-update/general_ledger.model";

@Injectable()
export class GeneralLedgerService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: GeneralLedger) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addGeneralLedger.url,
      param: quote,
      type: Utility.urlParams.addGeneralLedger.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: GeneralLedger) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateGeneralLedger.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateGeneralLedger.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<GeneralLedger[]> {
    const request = {
      url: Utility.urlParams.getGeneralLedger.url,
      param: {},
      type: Utility.urlParams.getGeneralLedger.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as GeneralLedger[];
    }
    return [] as GeneralLedger[];;
  }

  async deleteQuotes(quote: GeneralLedger ): Promise<GeneralLedger[]> {
    const request = {
      url: Utility.urlParams.updateGeneralLedger.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
