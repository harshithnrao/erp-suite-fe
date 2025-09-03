import { Injectable } from "@angular/core";
// import { CommonService } from ".pp/common/common.service.ts";
import { CommonService } from "src/app/common/common.service";
import { PermissionService } from "src/app/permission.service";import { Utility } from "src/app/common/Utility";
import { lastValueFrom } from "rxjs";
import { HttpRequestModel } from "src/app/common/common.model";
import { Proposal } from "./proposal-create-update/proposal.model";

@Injectable()
export class ProposalService {

  constructor(private commonService: CommonService,protected permissionService: PermissionService) { }


  async addQuote(quote: Proposal) {
    delete quote.id;
    const request: HttpRequestModel = {
      url: Utility.urlParams.addProposal.url,
      param: quote,
      type: Utility.urlParams.addProposal.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async updateQuote(quote: Proposal) {
    const request: HttpRequestModel = {
      url: Utility.urlParams.updateProposal.url.replace("{id}", quote.id.toString()),
      param: quote,
      type: Utility.urlParams.updateProposal.type
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }

  async getQuotes(): Promise<Proposal[]> {
    const request = {
      url: Utility.urlParams.getProposal.url,
      param: {},
      type: Utility.urlParams.getProposal.type
    }
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    if (response) {

      return response as Proposal[];
    }
    return [] as Proposal[];;
  }
  async deleteQuotes(quote: Proposal): Promise<Proposal[]> {
    const request = {
      url: Utility.urlParams.updateProposal.url.replace("{id}", quote.id.toString()),

      type: 'DELETE'
    };
    console.log(quote);
    const response = await lastValueFrom(this.commonService.getAPIResponse(request));
    return response;
  }
}
