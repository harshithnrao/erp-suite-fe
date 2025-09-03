import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { FinanceService } from "./finance.service";
import { FinanceComponent } from "./finance.component";
import { FinanceRoutingModule } from "./finance-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { QuickInfoWidgetModule } from "../pages/dashboard/widgets/quick-info-widget/quick-info-widget.module";
import { SalesSummaryWidgetModule } from "../pages/dashboard/widgets/sales-summary-widget/sales-summary-widget.module";
import { AdvancedPieChartWidgetModule } from "../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module";
import { BarChartWidgetModule } from "../pages/dashboard/widgets/bar-chart-widget/bar-chart-widget.module";
import { DonutChartWidgetModule } from "../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget.module";
import { AudienceOverviewWidgetModule } from "../pages/dashboard/widgets/audience-overview-widget/audience-overview-widget.module";

@NgModule({
  imports: [
    FinanceRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    HttpClientModule,
    // FinanceCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    QuickInfoWidgetModule,
    SalesSummaryWidgetModule,
    AdvancedPieChartWidgetModule,
    BarChartWidgetModule,
    DonutChartWidgetModule,
    AudienceOverviewWidgetModule
],
  declarations: [FinanceComponent],
  exports: [FinanceComponent],
  providers: [FinanceService]
})
export class FinanceModule {
}
