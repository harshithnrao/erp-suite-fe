import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { HrmsService } from "./hrms.service";
import { HrmsComponent } from "./hrms.component";
import { HrmsRoutingModule } from "./hrms-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { DashboardModule } from "../pages/dashboard/dashboard.module";
import { AdvancedPieChartWidgetModule } from "./advanced-pie-chart-widget/advanced-pie-chart-widget.module";
import { SalesSummaryWidgetModule } from "../pages/dashboard/widgets/sales-summary-widget/sales-summary-widget.module";
import { QuickInfoWidgetComponent } from "./quick-info-widget/quick-info-widget.component";
import { QuickInfoWidgetModule } from "./quick-info-widget/quick-info-widget.module";
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { MaterialModule } from '../../../@fury/shared/material-components.module';
// import { AdvancedPieChartWidgetModule } from '../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module';
// import { AudienceOverviewWidgetModule } from '../pages/dashboard/widgets/audience-overview-widget/audience-overview-widget.module';
// import { BarChartWidgetModule } from '../pages/dashboard/widgets/bar-chart-widget/bar-chart-widget.module';
// import { DonutChartWidgetModule } from '../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget.module';
// import { LineChartWidgetModule } from '../pages/dashboard/widgets/line-chart-widget/line-chart-widget.module';
// import { MarketWidgetModule } from '../pages/dashboard/widgets/market-widget/market-widget.module';
// import { QuickInfoWidgetModule } from '../pages/dashboard/widgets/quick-info-widget/quick-info-widget.module';
// import { RealtimeUsersWidgetModule } from '../pages/dashboard/widgets/realtime-users-widget/realtime-users-widget.module';
// import { RecentSalesWidgetModule } from '../pages/dashboard/widgets/recent-sales-widget/recent-sales-widget.module';
// import { SalesSummaryWidgetModule } from '../pages/dashboard/widgets/sales-summary-widget/sales-summary-widget.module';
// import { FurySharedModule } from '../../../@fury/fury-shared.module';
// import { CommonComponentsModule } from '../../common/common.module';
// import { BarChartWidgetModule } from "../pages/dashboard/widgets/bar-chart-widget/bar-chart-widget.module";


@NgModule({
  imports: [
    HrmsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    HttpClientModule,
    // HrmsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    AdvancedPieChartWidgetModule,
    SalesSummaryWidgetModule,
    QuickInfoWidgetModule
],
  declarations: [HrmsComponent],
  exports: [HrmsComponent],
  providers: [HrmsService]
})
export class HrmsModule {
}
