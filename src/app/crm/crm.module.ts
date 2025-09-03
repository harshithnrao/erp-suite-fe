import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { CrmService } from "./crm.service";
import { CrmComponent } from "./crm.component";
import { CrmRoutingModule } from "./crm-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { QuickInfoWidgetModule } from "./quick-info-widget/quick-info-widget.module";
import { AudienceOverviewWidgetModule } from "../pages/dashboard/widgets/audience-overview-widget/audience-overview-widget.module";
import { DonutChartWidgetModule } from "../pages/dashboard/widgets/donut-chart-widget/donut-chart-widget.module";

@NgModule({
  imports: [
    CrmRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    HttpClientModule,
    // CrmCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule,
    QuickInfoWidgetModule,
    AudienceOverviewWidgetModule,
    DonutChartWidgetModule
],
  declarations: [CrmComponent],
  exports: [CrmComponent],
  providers: [CrmService]
})
export class CrmModule {
}
