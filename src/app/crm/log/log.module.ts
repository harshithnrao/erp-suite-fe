import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { LogRoutingModule } from "./log-routing.module";
import { LogCreateUpdateModule } from "./log-create-update/log-create-update.module";
import { LogComponent } from "./log.component";
import { LogService } from "./log.service";

@NgModule({
  imports: [
    LogRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    LogCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [LogComponent],
  exports: [LogComponent],
  providers: [LogService]
})
export class LogModule {
}
