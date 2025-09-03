import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Budget } from "./budget-create-update/budget.model";

@Injectable()
export class BudgetService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Budget) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addBudget.url,
      param: quote,
      type: Utility.urlParams.addBudget.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Budget) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateBudget.url,
      param: quote,
      type: Utility.urlParams.updateBudget.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Budget[]> {
    const request = {
      url: Utility.urlParams.getBudget.url,
      param: {},
      type: Utility.urlParams.getBudget.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Budget[];
    }
    return [] as Budget[];;
  }
}
