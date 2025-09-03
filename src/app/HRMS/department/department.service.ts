import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Department } from "./department-create-update/department.model";

@Injectable()
export class DepartmentService {
  

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Department) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addDepartment.url,
      param: quote,
      type: Utility.urlParams.addDepartment.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Department) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateDepartment.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateDepartment.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Department[]> {
    const request = {
      url: Utility.urlParams.getDepartment.url,
      param: {},
      type: Utility.urlParams.getDepartment.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Department[];
    }
    return [] as Department[];;
  }
  async deleteQuotes(quote: Department): Promise<Department[]> {
    const request = {
      url: Utility.urlParams.updateDepartment.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
