import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpRequestModel } from '../common/common.model';
import { Utility } from '../common/Utility';
import { CommonService } from '../common/common.service';
import { PermissionService } from '../permission.service';

export interface MenuItem {
  name: string;
  routeOrFunction: string;
  icon: string;
  badge: string;
  badgeColor: string;
  position: number;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  screenModel: any = {};

  constructor(private http: HttpClient, private commonService: CommonService,protected permissionService: PermissionService) {
  }
  private jsonUrl = 'assets/crm/menu-items.crm.json';//src\assets\crm\menu-items.crm.json

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<{ 'menu-items': MenuItem[] }>(this.jsonUrl).pipe(
      map(data => data['menu-items'].filter(menuItem => this.permissionService.hasPermission(menuItem.name,'Read')))
    );
  }
  async getDashboardData() {
    const contractCountRequest = {
      url: Utility.urlParams.getContractCount.url,
      param: {},
      type: Utility.urlParams.getContractCount.type,
    };
    const proposalCountRequest = {
      url: Utility.urlParams.getProposalCount.url,
      param: {},
      type: Utility.urlParams.getProposalCount.type,
    };
    const leadCountRequest = {
      url: Utility.urlParams.getLeadCount.url,
      param: {},
      type: Utility.urlParams.getLeadCount.type,
    };
    const customerCountRequest = {
      url: Utility.urlParams.getCustomerCount.url,
      param: {},
      type: Utility.urlParams.getCustomerCount.type,
    };
    const contractForecast = {
      url: Utility.urlParams.getContractForecast.url,
      param: {},
      type: Utility.urlParams.getContractForecast.type,
    };
    const reviewClassification = {
      url: Utility.urlParams.getReviewClassification.url,
      param: {},
      type: Utility.urlParams.getReviewClassification.type,
    };

  
    const requests: HttpRequestModel[] = [
      contractCountRequest,
      proposalCountRequest,
      leadCountRequest,
      customerCountRequest,
      // contractForecast,
      // reviewClassification
    ];
  
    try {
      const responses = await lastValueFrom(this.commonService.getGenericForkJoin(requests));
  
      if (responses) {
        this.screenModel.contractCount = responses[0];
        this.screenModel.proposalCount = responses[1];
        this.screenModel.leadCount = responses[2];
        this.screenModel.customerCount = responses[3];
        this.screenModel.contractForecast = {};
        this.screenModel.reviewClassification = {};
      }
  
      return responses;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }
  
}
