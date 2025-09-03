import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Payroll } from "./payroll-create-update/payroll.model";

@Injectable()
export class PayrollService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Payroll) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addPayroll.url,
      param: quote,
      type: Utility.urlParams.addPayroll.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Payroll) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updatePayroll.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updatePayroll.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Payroll[]> {
    const request = {
      url: Utility.urlParams.getPayroll.url,
      param: {},
      type: Utility.urlParams.getPayroll.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Payroll[];
    }
    return [] as Payroll[];;
  }

  async deleteQuotes(quote: Payroll ): Promise<Payroll[]> {
    const request = {
      url: Utility.urlParams.updatePayroll.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
