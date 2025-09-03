import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Item } from "./item-create-update/item.model";

@Injectable()
export class ItemService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Item) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addItem.url,
      param: quote,
      type: Utility.urlParams.addItem.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Item) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateItem.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateItem.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Item[]> {
    const request = {
      url: Utility.urlParams.getItem.url,
      param: {},
      type: Utility.urlParams.getItem.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Item[];
    }
    return [] as Item[];;
  }

  async deleteQuotes(quote: Item ): Promise<Item[]> {
    const request = {
      url: Utility.urlParams.updateItem.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
