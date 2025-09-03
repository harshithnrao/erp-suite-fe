import { Injectable } from "@angular/core";
import { CommonService } from "../common/common.service";
import { Utility } from "../common/Utility";
import { lastValueFrom } from "rxjs";
import { Order } from "./quotes-create-update/quotes.model";
import { HttpRequestModel } from "../common/common.model";

@Injectable()
export class QuotesService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Order) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addQuote.url,
      param: quote,
      type: Utility.urlParams.addQuote.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Order) {
    let url = Utility.urlParams.updateQuote.url;
    url = url.replace('{id}', quote.id.toString());
    const request: HttpRequestModel = {
      url: url,
      param: quote,
      type: Utility.urlParams.updateQuote.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async deleteQuote(quote: Order) {
    let url = Utility.urlParams.deleteQuote.url;
    url = url.replace('{id}', quote.id.toString());
    const request: HttpRequestModel = {
      url: url,
      param: quote,
      type: Utility.urlParams.deleteQuote.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Order[]> {
    const request = {
      url: Utility.urlParams.getQuotes.url,
      param: {},
      type: Utility.urlParams.getQuotes.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if (response) {

      return response as Order[];
    }
    return [] as Order[];;
  }
}
