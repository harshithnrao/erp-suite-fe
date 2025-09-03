import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { AccountsCreateUpdateModule } from "./accounts-create-update/accounts-create-update.module";
import { AccountsComponent } from "./accounts.component";
import { AccountsService } from "./accounts.service";

@NgModule({
  imports: [
    AccountsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    AccountsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [AccountsComponent],
  exports: [AccountsComponent],
  providers: [AccountsService]
})
export class AccountsModule {
}
