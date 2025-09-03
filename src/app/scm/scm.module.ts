import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { ScmService } from "./scm.service";
import { ScmComponent } from "./scm.component";
import { ScmRoutingModule } from "./scm-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { QuickInfoWidgetModule } from "../pages/dashboard/widgets/quick-info-widget/quick-info-widget.module";
import { SalesSummaryWidgetModule } from "../pages/dashboard/widgets/sales-summary-widget/sales-summary-widget.module";
import { AdvancedPieChartWidgetModule } from "../pages/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module";
import { DonutChartWidgetModule } from "../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget.module";

@NgModule({
  imports: [
    ScmRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    HttpClientModule,
    // ScmCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    QuickInfoWidgetModule,
    SalesSummaryWidgetModule,
    AdvancedPieChartWidgetModule,
    DonutChartWidgetModule
],
  declarations: [ScmComponent],
  exports: [ScmComponent],
  providers: [ScmService]
})
export class ScmModule {
}
