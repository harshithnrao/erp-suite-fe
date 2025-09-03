import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { RatesheetRoutingModule } from "./ratesheet-routing.module";
import { RatesheetCreateUpdateModule } from "./ratesheet-create-update/ratesheet-create-update.module";
import { RatesheetComponent } from "./ratesheet.component";
import { RatesheetService } from "./ratesheet.service";

@NgModule({
  imports: [
    RatesheetRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    RatesheetCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [RatesheetComponent],
  exports: [RatesheetComponent],
  providers: [RatesheetService]
})
export class RatesheetModule {
}
