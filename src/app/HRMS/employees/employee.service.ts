import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Employee } from "./employee-create-update/employee.model";
import { Document } from "./document-create-update/document.model";

@Injectable()
export class EmployeeService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Employee) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addEmployee.url,
      param: quote,
      type: Utility.urlParams.addEmployee.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
  async addDocument(quote: Document) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addEmployee.url,
      param: quote,
      type: Utility.urlParams.addEmployee.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Employee) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateEmployee.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateEmployee.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Employee[]> {
    const request = {
      url: Utility.urlParams.getEmployee.url,
      param: {},
      type: Utility.urlParams.getEmployee.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Employee[];
    }
    return [] as Employee[];;
  }

  async deleteQuotes(quote: Employee): Promise<Employee[]> {
    const request = {
      url: Utility.urlParams.updateEmployee.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
