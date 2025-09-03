import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Category } from "./category-create-update/category.model";

@Injectable()
export class CategoryService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Category) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addCategory.url,
      param: quote,
      type: Utility.urlParams.addCategory.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Category) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateCategory.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateCategory.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Category[]> {
    const request = {
      url: Utility.urlParams.getCategory.url,
      param: {},
      type: Utility.urlParams.getCategory.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Category[];
    }
    return [] as Category[];;
  }
  async deleteQuotes(quote: Category ): Promise<Category[]> {
    const request = {
      url: Utility.urlParams.updateCategory.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
