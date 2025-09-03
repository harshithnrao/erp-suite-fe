import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Contract } from "./contract-create-update/contract.model";

@Injectable()
export class ContractService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Contract) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addContract.url,
      param: quote,
      type: Utility.urlParams.addContract.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Contract) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateContract.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateContract.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Contract[]> {
    const request = {
      url: Utility.urlParams.getContract.url,
      param: {},
      type: Utility.urlParams.getContract.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Contract[];
    }
    return [] as Contract[];;
  }

  async deleteQuotes(quote: Contract ): Promise<Contract[]> {
    const request = {
      url: Utility.urlParams.updateContract.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
