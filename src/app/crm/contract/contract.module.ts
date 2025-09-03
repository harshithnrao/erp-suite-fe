import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { ContractRoutingModule } from "./contract-routing.module";
import { ContractCreateUpdateModule } from "./contract-create-update/contract-create-update.module";
import { ContractComponent } from "./contract.component";
import { ContractService } from "./contract.service";

@NgModule({
  imports: [
    ContractRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    ContractCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [ContractComponent],
  exports: [ContractComponent],
  providers: [ContractService]
})
export class ContractModule {
}
