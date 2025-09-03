import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TransactionsCreateUpdateModule } from "./transactions-create-update/transactions-create-update.module";
import { TransactionsComponent } from "./transactions.component";
import { TransactionsService } from "./transactions.service";

@NgModule({
  imports: [
    TransactionsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    TransactionsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [TransactionsComponent],
  exports: [TransactionsComponent],
  providers: [TransactionsService]
})
export class TransactionsModule {
}
