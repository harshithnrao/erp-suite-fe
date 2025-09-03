import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model"; 
import { Document } from "./document-create-update/document.model";

@Injectable()
export class DocumentService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Document) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addDocument.url,
      param: quote,
      type: Utility.urlParams.addDocument.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Document) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateDocument.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateDocument.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Document[]> {
    const request = {
      url: Utility.urlParams.getDocument.url,
      param: {},
      type: Utility.urlParams.getDocument.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if(response ) {
      
      return response as Document[];
    }
    return [] as Document[];;
  }
  async deleteQuotes(quote: Document ): Promise<Document[]> {
    const request = {
      url: Utility.urlParams.updateDocument.url.replace("{id}", quote.id.toString()),
      
      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
