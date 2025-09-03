import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { AccountsReceivableRoutingModule } from "./accounts_receivable-routing.module";
import { AccountsReceivableCreateUpdateModule } from "./accounts_receivable-create-update/accounts_receivable-create-update.module";
import { AccountsReceivableComponent } from "./accounts_receivable.component";
import { AccountsReceivableService } from "./accounts_receivable.service";

@NgModule({
  imports: [
    AccountsReceivableRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    AccountsReceivableCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [AccountsReceivableComponent],
  exports: [AccountsReceivableComponent],
  providers: [AccountsReceivableService]
})
export class AccountsReceivableModule {
}
