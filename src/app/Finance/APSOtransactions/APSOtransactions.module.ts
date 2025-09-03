import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { APSOTransactionsRoutingModule } from "./APSOtransactions-routing.module";
import { APSOTransactionsCreateUpdateModule } from "./APSOtransactions-create-update/APSOtransactions-create-update.module";
import { APSOTransactionsComponent } from "./APSOtransactions.component";
import { APSOTransactionsService } from "./APSOtransactions.service";

@NgModule({
  imports: [
    APSOTransactionsRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    APSOTransactionsCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [APSOTransactionsComponent],
  exports: [APSOTransactionsComponent],
  providers: [APSOTransactionsService]
})
export class APSOTransactionsModule {
}
