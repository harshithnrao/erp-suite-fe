
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScmService, MenuItem } from './scm.service';
import { AdvancedPieChartWidgetOptions } from '../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { ChartData } from 'chart.js';
import { Observable, of } from 'rxjs';
import { DonutChartWidgetOptions } from '../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget-options.interface';

@Component({
  selector: 'fury-scm',
  templateUrl: './scm.component.html',
  styleUrls: ['./scm.component.scss']
})
export class ScmComponent implements OnInit {
  menuItems: MenuItem[] = [];

  crumbs = [
    // { label: 'Home', url: '/home' },
    // { label: 'HRMS', url: '/scm' },
    // { label: 'Employees', url: '' } // No URL for the current page
  ];

  
  advancedPieChartOptions: AdvancedPieChartWidgetOptions = {
    title: 'Consumer Logistic',
    subTitle: ''
  };
  advancedPieChartData$: Observable<ChartData>;
  advancedPieChartOptions2: AdvancedPieChartWidgetOptions = {
    title: 'Inhouse Logistic',
    subTitle: ''
  };
  advancedPieChartData2$: Observable<ChartData>;
  
  topCategoriesData$: Observable<ChartData>;
  topCategoriesOptions: DonutChartWidgetOptions = {
    title: 'Purchase & Service Orders',
    subTitle: ''
  };

  categoriesCount: any;
  distributionCentersCount: any;
  itemsCount: any;
  logisticsCount: any;
  logisticsAmountCount: any;
  purchaseOrdersCount: any;
  serviceOrdersCount: any;
  vendorsCount: any;
  zonesCount: any;
  private _gap = 16;
  gap = `${this._gap}px`;

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }
  constructor(private scmService: ScmService) { }

  async ngOnInit(): Promise<void> {
    this.scmService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });

    await this.getDashboardData();
  }

  async getDashboardData() {
    await this.scmService.getDashboardData();

    this.categoriesCount = this.scmService.screenModel.categoriesCount;
    this.distributionCentersCount = this.scmService.screenModel.distributionCentersCount;
    this.itemsCount = this.scmService.screenModel.itemsCount;
    this.logisticsCount = this.scmService.screenModel.logisticsCount;
    this.logisticsAmountCount = this.scmService.screenModel.logisticsAmountCount;
    this.purchaseOrdersCount = this.scmService.screenModel.purchaseOrdersCount;
    this.serviceOrdersCount = this.scmService.screenModel.serviceOrdersCount;
    this.vendorsCount = this.scmService.screenModel.vendorsCount;
    this.zonesCount = this.scmService.screenModel.zonesCount;

    const labels = [
      'Categories',
      'Logistics',
      'Items',
    ];

    const data = [
      this.categoriesCount.totalCategories,
      this.logisticsCount.totalLogistic,
      this.itemsCount.totalItems,
  
    ];
    const backgroundColor = [
'#5fb1bf', '#ccedf6', '#ee7b44'    ];

    const hoverBackgroundColor = [
       "#4c9ca3", "#88a1b1", "#d47149"
    ];

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
    const labels2 = [
      'Distribution Centers',
      'Vendors',
      'Zones',
      
    ];

    const data2 = [
      this.distributionCentersCount.totalDistributionCenters,
      this.vendorsCount.totalVendors,
      this.zonesCount.totalZones,
  
    ];
    this.advancedPieChartData2$ = of({
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

    const labels3 = ['Purchase Orders', 'Service Orders'];
    const data3 = [
      this.purchaseOrdersCount.totalPurchaseOrders,
      this.serviceOrdersCount.totalServiceOrders
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
  }

}
