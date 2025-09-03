import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utility } from '../common/Utility';
import { HttpRequestModel } from '../common/common.model';
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
export class FinanceService {
  screenModel: any = {};

  constructor(private http: HttpClient, private commonService: CommonService,protected permissionService: PermissionService) {
  }

  private jsonUrl = 'assets/finance/menu-items.finance.json';//src\assets\finance\menu-items.finance.json

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<{ 'menu-items': MenuItem[] }>(this.jsonUrl).pipe(
      map(data => data['menu-items'].filter(menuItem => this.permissionService.hasPermission(menuItem.name,'Read')))
    );
  }

  async getDashboardData() {
    const payableAccountsCountRequest = {
      url: Utility.urlParams.getPayableAccountsCount.url,
      param: {},
      type: Utility.urlParams.getPayableAccountsCount.type,
    };
    const payablePOCountRequest = {
      url: Utility.urlParams.getPayablePOCount.url,
      param: {},
      type: Utility.urlParams.getPayablePOCount.type,
    };
    const payableSOCountRequest = {
      url: Utility.urlParams.getPayableSOCount.url,
      param: {},
      type: Utility.urlParams.getPayableSOCount.type,
    };
    const receivableAccountsCountRequest = {
      url: Utility.urlParams.getReceivableAccountsCount.url,
      param: {},
      type: Utility.urlParams.getReceivableAccountsCount.type,
    };
    const receivablesCountRequest = {
      url: Utility.urlParams.getReceivablesCount.url,
      param: {},
      type: Utility.urlParams.getReceivablesCount.type,
    };
    const auditLogCountRequest = {
      url: Utility.urlParams.getAuditLogCount.url,
      param: {},
      type: Utility.urlParams.getAuditLogCount.type,
    };
    const generalLedgerCountRequest = {
      url: Utility.urlParams.getGeneralLedgerCount.url,
      param: {},
      type: Utility.urlParams.getGeneralLedgerCount.type,
    };
    const invoicesCountRequest = {
      url: Utility.urlParams.getInvoicesCount.url,
      param: {},
      type: Utility.urlParams.getInvoicesCount.type,
    };
    const totalTaxCountRequest = {
      url: Utility.urlParams.getTotalTaxCount.url,
      param: {},
      type: Utility.urlParams.getTotalTaxCount.type,
    };
    const ordersCountRequest = {
      url: Utility.urlParams.getOrdersCount.url,
      param: {},
      type: Utility.urlParams.getOrdersCount.type,
    };
    const transactionsTodayCountRequest = {
      url: Utility.urlParams.getTransactionsTodayCount.url,
      param: {},
      type: Utility.urlParams.getTransactionsTodayCount.type,
    };
    const transactionsPayableAmountCountRequest = {
      url: Utility.urlParams.getTransactionsPayableAmountCount.url,
      param: {},
      type: Utility.urlParams.getTransactionsPayableAmountCount.type,
    };
    const transactionsReceivableAmountCountRequest = {
      url: Utility.urlParams.getTransactionsReceivableAmountCount.url,
      param: {},
      type: Utility.urlParams.getTransactionsReceivableAmountCount.type,
    };
    const transactionsCashInflowCountRequest = {
      url: Utility.urlParams.getTransactionsCashInflowCount.url,
      param: {},
      type: Utility.urlParams.getTransactionsCashInflowCount.type,
    };
    const transactionsCashOutflowCountRequest = {
      url: Utility.urlParams.getTransactionsCashOutflowCount.url,
      param: {},
      type: Utility.urlParams.getTransactionsCashOutflowCount.type,
    };
    // const ledgerForecast = {
    //   url: Utility.urlParams.getLedgerForecast.url,
    //   param: {},
    //   type: Utility.urlParams.getLedgerForecast.type,
    // };
    

    const requests: HttpRequestModel[] = [
      payableAccountsCountRequest,
      payablePOCountRequest,
      payableSOCountRequest,
      receivableAccountsCountRequest,
      receivablesCountRequest,
      auditLogCountRequest,
      generalLedgerCountRequest,
      invoicesCountRequest,
      totalTaxCountRequest,
      ordersCountRequest,
      transactionsTodayCountRequest,
      transactionsPayableAmountCountRequest,
      transactionsReceivableAmountCountRequest,
      transactionsCashInflowCountRequest,
      transactionsCashOutflowCountRequest,
      // ledgerForecast
    ];

    try {
      const responses = await lastValueFrom(this.commonService.getGenericForkJoin(requests));

      if (responses) {
        this.screenModel.payableAccountsCount = responses[0];
        this.screenModel.payablePOCount = responses[1];
        this.screenModel.payableSOCount = responses[2];
        this.screenModel.receivableAccountsCount = responses[3];
        this.screenModel.receivablesCount = responses[4];
        this.screenModel.auditLogCount = responses[5];
        this.screenModel.generalLedgerCount = responses[6];
        this.screenModel.invoicesCount = responses[7];
        this.screenModel.totalTaxCount = responses[8];
        this.screenModel.ordersCount = responses[9];
        this.screenModel.transactionsTodayCount = responses[10];
        this.screenModel.transactionsPayableAmountCount = responses[11];
        this.screenModel.transactionsReceivableAmountCount = responses[12];
        this.screenModel.transactionsCashInflowCount = responses[13];
        this.screenModel.transactionsCashOutflowCount = responses[14];
        this.screenModel.ledgerForecast = {};
      }

      return responses;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }

}
