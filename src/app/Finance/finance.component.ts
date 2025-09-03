import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FinanceService, MenuItem } from './finance.service';
import { ChartData } from 'chart.js';
import { Observable, of } from 'rxjs';
import { SalesSummaryWidgetOptions } from '../HRMS/sales-summary-widget/sales-summary-widget-options.interface';
import { AdvancedPieChartWidgetOptions } from '../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { BarChartWidgetOptions } from '../pages/dashboard/widgets/bar-chart-widget/bar-chart-widget-options.interface';
import { DonutChartWidgetOptions } from '../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget-options.interface';


@Component({
  selector: 'fury-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  menuItems: MenuItem[] = [];

  crumbs = [];
  private _gap = 16;
  gap = `${this._gap}px`;
  payableAccountsCount: any;
  payablePOCount: any;
  payableSOCount: any;
  receivableAccountsCount: any;
  receivablesCount: any;
  auditLogCount: any;
  generalLedgerCount: any;
  invoicesCount: any;
  totalTaxCount: any;
  ordersCount: any;
  transactionsTodayCount: any;
  transactionsPayableAmountCount: any;
  transactionsReceivableAmountCount: any;
  transactionsCashInflowCount: any;
  transactionsCashOutflowCount: any;

  advancedPieChartOptions: AdvancedPieChartWidgetOptions = {
    title: 'Accounts and Financials',
    subTitle: ''
  };
  advancedPieChartData$: Observable<ChartData>;
  salesData$: Observable<ChartData>;
  totalSalesOptions: BarChartWidgetOptions = {
    title: 'Total Sales',
    gain: 16.3,
    subTitle: 'compared to last month',
    background: '#3F51B5',
    color: '#FFFFFF'
  };

  audienceOverviewCredit$: ChartData;
  audienceOverviewOptionsCredit: AdvancedPieChartWidgetOptions = {
    title: 'Credit Forecasting',
    subTitle: 'AI prediction'
  };

  audienceOverviewDebit$: ChartData;
  audienceOverviewOptionsDebit: AdvancedPieChartWidgetOptions = {
    title: 'Debit Forecasting',
    subTitle: 'AI prediction'
  };

  topCategoriesData$: Observable<ChartData>;
  top5CategoriesData$: Observable<ChartData>;
  top5CategoriesOptions: DonutChartWidgetOptions = {
    title: 'Accounts',
    subTitle: 'Payable and Receivable'
  };
  topCategoriesOptions: DonutChartWidgetOptions = {
    title: 'Invoice and Order',
    subTitle: ''
  };

  salesSummary: any = {};
  salesSummary2: any = {};
  salesSummaryData$: Observable<ChartData>;
  salesSummaryOptions: SalesSummaryWidgetOptions = {
    title: 'Cash Flow Summary',
    subTitle: 'Cash Inflow and Outflow',
    gain: 37.2
  };
  salesSummaryOptions2: SalesSummaryWidgetOptions = {
    title: 'Balance Summary',
    subTitle: 'Payables and Receiveables',
    gain: 37.2
  };
  ledgerForecast: any;
  contractForecast: any;
  audienceOverview$: {
    labels: string[]; datasets: {
      label: string; // You can adjust this label
      data: any[]; // The dataset with forecasted amounts
      borderColor: string; // Optional styling
      backgroundColor: string; // Optional styling
      fill: boolean; // Optional: whether the area under the line should be filled
    }[];
  };
  credit_forecast: any;
  debit_forecast: any;

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }
  constructor(private financeService: FinanceService) { }

  async ngOnInit(): Promise<void> {
    (await this.financeService.getMenuItems()).subscribe(items => {
      this.menuItems = items;
    });
    this.getDashboardData();

  }
  async getDashboardData() {
    await this.financeService.getDashboardData();
    // this.advancedPieChartData$ = this.financeService.getAdvancedPieChartData();

    this.payableAccountsCount = this.financeService.screenModel.payableAccountsCount;
    this.payablePOCount = this.financeService.screenModel.payablePOCount;
    this.payableSOCount = this.financeService.screenModel.payableSOCount;
    this.receivableAccountsCount = this.financeService.screenModel.receivableAccountsCount;
    this.receivablesCount = this.financeService.screenModel.receivablesCount;
    this.auditLogCount = this.financeService.screenModel.auditLogCount;
    this.generalLedgerCount = this.financeService.screenModel.generalLedgerCount;
    this.invoicesCount = this.financeService.screenModel.invoicesCount;
    this.totalTaxCount = this.financeService.screenModel.totalTaxCount;
    this.ordersCount = this.financeService.screenModel.ordersCount;
    this.transactionsTodayCount = this.financeService.screenModel.transactionsTodayCount;
    this.transactionsPayableAmountCount = this.financeService.screenModel.transactionsPayableAmountCount;
    this.transactionsReceivableAmountCount = this.financeService.screenModel.transactionsReceivableAmountCount;
    this.transactionsCashInflowCount = this.financeService.screenModel.transactionsCashInflowCount;
    this.transactionsCashOutflowCount = this.financeService.screenModel.transactionsCashOutflowCount;
    this.salesSummary.previousMonth = this.transactionsCashInflowCount.amount;
    this.salesSummary.thisMonth = this.transactionsCashOutflowCount.amount;
    this.salesSummary2.previousMonth = this.transactionsPayableAmountCount.totalPayableAmount;
    this.salesSummary2.thisMonth = this.transactionsReceivableAmountCount.totalReceivableAmount;
    this.ledgerForecast = this.financeService.screenModel.ledgerForecast;
    this.credit_forecast = this.ledgerForecast.credit_forecast;
    this.debit_forecast = this.ledgerForecast.debit_forecast;
    const labels = [
      'General Ledgers',
      'Payable Puchase Orders',
      'Payable Service Orders',
      'Receivables',
      'Today\'s transactions',
    ];

    const data = [
      this.generalLedgerCount,
      this.payablePOCount,
      this.payableSOCount,
      this.receivableAccountsCount,
      this.transactionsTodayCount.totalTransactions,
    ];
    const backgroundColor = [
'#042a2b', '#5fb1bf', '#ccedf6', '#ee7b44', '#d84826'    ];

    const hoverBackgroundColor = ["#034d4b", "#4c9ca3", "#88a1b1", "#d47149", "#b7462f"];

    this.advancedPieChartData$ = of({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
          borderWidth: 1
        }
      ]
    });

    const labels2 = ['Payable accounts', 'Receivable accounts'];
    const data2 = [
      this.payableAccountsCount,
      this.receivableAccountsCount
    ]

    this.top5CategoriesData$ = of({
      labels: labels2,
      datasets: [
        {
          data: data2,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
          borderWidth: 1
        }
      ]
    });
    const labels3 = ['Invoices', 'Orders'];
    const data3 = [
      this.invoicesCount,
      this.ordersCount.totalOrders
    ]
    this.topCategoriesData$ = of({
      labels: labels3,
      datasets: [
        {
          data: data3,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
          borderWidth: 1
        }
      ]
    });

    const labelsCredit = Object.keys(this.credit_forecast);
    // const data = Object.values(this.contractForecast.forecasted_total_amounts);
    const dataCredit: number[] = Object.values(this.credit_forecast) as number[];
    const backgroundColorC = [
      '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF7F50', '#7FFF50'
    ];

    const hoverBackgroundColorC = [
      '#FF7F50', '#7FFF50', '#5577FF', '#FF8C00', '#FF6347', '#7CFC00'
    ];

    this.audienceOverviewCredit$ = {
      labels: labelsCredit,
      datasets: [
        {
          label: 'Forecasted Amounts', // You can adjust this label
          data: dataCredit, // The dataset with forecasted amounts
          borderColor: 'rgba(75, 192, 192, 1)', // Optional styling
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Optional styling
          fill: false // Optional: whether the area under the line should be filled
        }
      ]
    };

    const labelsDebit = Object.keys(this.debit_forecast);
    // const data = Object.values(this.contractForecast.forecasted_total_amounts);
    const dataDebit: number[] = Object.values(this.debit_forecast) as number[];
    this.audienceOverviewDebit$ = {
      labels: labelsDebit,
      datasets: [
        {
          label: 'Forecasted Amounts', // You can adjust this label
          data: dataDebit, // The dataset with forecasted amounts
          borderColor: 'rgba(75, 192, 192, 1)', // Optional styling
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Optional styling
          fill: false // Optional: whether the area under the line should be filled
        }
      ]
    };
  }

}
