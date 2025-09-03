import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
import { PermissionService } from '../permission.service';
import { HttpRequestModel } from '../common/common.model';
import { Utility } from '../common/Utility';

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
export class ScmService {
  screenModel: any = {};

  constructor(private http: HttpClient, private commonService: CommonService,protected permissionService: PermissionService) {
  }
  private jsonUrl = 'assets/scm/menu-items.scm.json';//src\assets\scm\menu-items.scm.json

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<{ 'menu-items': MenuItem[] }>(this.jsonUrl).pipe(
      map(data => data['menu-items'].filter(menuItem => this.permissionService.hasPermission(menuItem.name,'Read')))
    );
  }

  async getDashboardData() {
    const categoriesCountRequest = {
      url: Utility.urlParams.getCategoriesCount.url,
      param: {},
      type: Utility.urlParams.getCategoriesCount.type,
    };
    const distributionCentersCountRequest = {
      url: Utility.urlParams.getDistributionCentersCount.url,
      param: {},
      type: Utility.urlParams.getDistributionCentersCount.type,
    };
    const itemsCountRequest = {
      url: Utility.urlParams.getItemsCount.url,
      param: {},
      type: Utility.urlParams.getItemsCount.type,
    };
    const logisticsCountRequest = {
      url: Utility.urlParams.getLogsiticsCount.url,
      param: {},
      type: Utility.urlParams.getLogsiticsCount.type,
    };
    const logisticsAmountCountRequest = {
      url: Utility.urlParams.getLogsiticsAmountCount.url,
      param: {},
      type: Utility.urlParams.getLogsiticsAmountCount.type,
    };
    const purchaseOrdersCountRequest = {
      url: Utility.urlParams.getPOCount.url,
      param: {},
      type: Utility.urlParams.getPOCount.type,
    };
    const serviceOrdersCountRequest = {
      url: Utility.urlParams.getSOCount.url,
      param: {},
      type: Utility.urlParams.getSOCount.type,
    };
    const vendorsCountRequest = {
      url: Utility.urlParams.getVendorsCount.url,
      param: {},
      type: Utility.urlParams.getVendorsCount.type,
    };
    const zonesCountRequest = {
      url: Utility.urlParams.getZonesCount.url,
      param: {},
      type: Utility.urlParams.getZonesCount.type,
    };
  
    const requests: HttpRequestModel[] = [
      categoriesCountRequest,
      distributionCentersCountRequest,
      itemsCountRequest,
      logisticsCountRequest,
      logisticsAmountCountRequest,
      purchaseOrdersCountRequest,
      serviceOrdersCountRequest,
      vendorsCountRequest,
      zonesCountRequest,
    ];
  
    try {
      const responses = await lastValueFrom(this.commonService.getGenericForkJoin(requests));
  
      if (responses) {
        this.screenModel.categoriesCount = responses[0];
        this.screenModel.distributionCentersCount = responses[1];
        this.screenModel.itemsCount = responses[2];
        this.screenModel.logisticsCount = responses[3];
        this.screenModel.logisticsAmountCount = responses[4];
        this.screenModel.purchaseOrdersCount = responses[5];
        this.screenModel.serviceOrdersCount = responses[6];
        this.screenModel.vendorsCount = responses[7];
        this.screenModel.zonesCount = responses[8];
      }
  
      return responses;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }
  
}
