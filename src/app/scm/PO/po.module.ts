import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { PORoutingModule } from "./po-routing.module";
import { POCreateUpdateModule } from "./po-create-update/po-create-update.module";
import { POComponent } from "./po.component";
import { POService } from "./po.service";

@NgModule({
  imports: [
    PORoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    POCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [POComponent],
  exports: [POComponent],
  providers: [POService]
})
export class POModule {
}
