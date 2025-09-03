
import { Component, OnInit } from '@angular/core';
import { CrmService, MenuItem } from './crm.service';
// import { ChartData } from 'chart.js';

import { Observable, of } from 'rxjs';
import { AdvancedPieChartWidgetOptions } from '../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { DonutChartWidgetOptions } from '../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget-options.interface';
import { ChartData } from 'chart.js';

@Component({
  selector: 'fury-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {
  menuItems: MenuItem[] = [];

  crumbs = [
    // { label: 'Home', url: '/home' },
    // { label: 'HRMS', url: '/crm' },
    // { label: 'Employees', url: '' } // No URL for the current page
  ];
  private _gap = 16;
  gap = `${this._gap}px`;

  reviewsData$: Observable<ChartData>;
  reviewsOptions: DonutChartWidgetOptions = {
    title: 'Reviews',
    subTitle: 'AI Classified'
  };
  contractCount: any;
  proposalCount: any;
  leadCount: any;
  customerCount: any;
  contractForecast: any;
  audienceOverview$: ChartData;
  audienceOverviewOptions: AdvancedPieChartWidgetOptions = {
    title: 'Contracts Forecasting',
    subTitle: 'AI prediction'
  };
  reviewClassification: any;
  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }

  constructor(private crmService: CrmService) { }
  async ngOnInit(): Promise<void> {
    (await this.crmService.getMenuItems()).subscribe(items => {
      this.menuItems = items;
    });
    this.getDashboardData();

  }
  async getDashboardData() {
    await this.crmService.getDashboardData();
    this.contractCount = this.crmService.screenModel.contractCount;
    this.proposalCount = this.crmService.screenModel.proposalCount;
    this.leadCount = this.crmService.screenModel.leadCount;
    this.customerCount = this.crmService.screenModel.customerCount;
    this.contractForecast = this.crmService.screenModel.contractForecast;
    this.reviewClassification = this.crmService.screenModel.reviewClassification

    const labels = Object.keys(this.contractForecast.forecasted_total_amounts);
    const labelsClassification = Object.keys(this.reviewClassification);
    // const labelsClassification = ['Object.keys(this.reviewClassification)']

    // const data = Object.values(this.contractForecast.forecasted_total_amounts);
    const data: number[] = Object.values(this.contractForecast.forecasted_total_amounts) as number[];
    const dataClassification: number[] = Object.values(this.reviewClassification) as number[];
    const backgroundColor = [
      '#042a2b', '#5fb1bf', '#ccedf6', '#ee7b44', '#d84826'
    ];

    const hoverBackgroundColor = [
      "#034d4b", "#4c9ca3", "#88a1b1", "#d47149", "#b7462f"
    ];

    this.audienceOverview$ = {
      labels: labels,
      datasets: [
        {
          label: 'Forecasted Amounts', // You can adjust this label
          data: data, // The dataset with forecasted amounts
          borderColor: 'rgba(75, 192, 192, 1)', // Optional styling
          backgroundColor: backgroundColor, // Optional styling
          fill: false // Optional: whether the area under the line should be filled
        }
      ]
    };
    this.reviewsData$ = of({
      labels: labelsClassification,
      datasets: [
        {
          label: 'Forecasted Amounts', // You can adjust this label
          data: dataClassification, // The dataset with forecasted amounts
          borderColor: 'rgba(75, 192, 192, 1)', // Optional styling
          backgroundColor: backgroundColor, // Optional styling
          fill: false // Optional: whether the area under the line should be filled
        }
      ]
    });


  }

}
