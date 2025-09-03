import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { AccountsPayableRoutingModule } from "./accounts_payable-routing.module";
import { AccountsPayableCreateUpdateModule } from "./accounts_payable-create-update/accounts_payable-create-update.module";
import { AccountsPayableComponent } from "./accounts_payable.component";
import { AccountsPayableService } from "./accounts_payable.service";

@NgModule({
  imports: [
    AccountsPayableRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    AccountsPayableCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [AccountsPayableComponent],
  exports: [AccountsPayableComponent],
  providers: [AccountsPayableService]
})
export class AccountsPayableModule {
}
