import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { GeneralLedgerRoutingModule } from "./general_ledger-routing.module";
import { GeneralLedgerCreateUpdateModule } from "./general_ledger-create-update/general_ledger-create-update.module";
import { GeneralLedgerComponent } from "./general_ledger.component";
import { GeneralLedgerService } from "./general_ledger.service";

@NgModule({
  imports: [
    GeneralLedgerRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    GeneralLedgerCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [GeneralLedgerComponent],
  exports: [GeneralLedgerComponent],
  providers: [GeneralLedgerService]
})
export class GeneralLedgerModule {
}
