import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { LogisticsRoutingModule } from "./logistics-routing.module";
import { LogisticsCreateUpdateModule } from "./logistics-create-update/logistics-create-update.module";
import { LogisticsComponent } from "./logistics.component";
import { LogisticsService } from "./logistics.service";

@NgModule({
  imports: [
    LogisticsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    LogisticsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [LogisticsComponent],
  exports: [LogisticsComponent],
  providers: [LogisticsService]
})
export class LogisticsModule {
}
