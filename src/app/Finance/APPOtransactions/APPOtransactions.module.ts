import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { APPOTransactionsRoutingModule } from "./APPOtransactions-routing.module";
import { APPOTransactionsCreateUpdateModule } from "./APPOtransactions-create-update/APPOtransactions-create-update.module";
import { APPOTransactionsComponent } from "./APPOtransactions.component";
import { APPOTransactionsService } from "./APPOtransactions.service";

@NgModule({
  imports: [
    APPOTransactionsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    APPOTransactionsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [APPOTransactionsComponent],
  exports: [APPOTransactionsComponent],
  providers: [APPOTransactionsService]
})
export class APPOTransactionsModule {
}
