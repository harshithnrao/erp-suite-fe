import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerCreateUpdateModule } from "./customer-create-update/customer-create-update.module";
import { CustomerComponent } from "./customer.component";
import { CustomerService } from "./customer.service";

@NgModule({
  imports: [
    CustomerRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    CustomerCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [CustomerComponent],
  exports: [CustomerComponent],
  providers: [CustomerService]
})
export class CustomerModule {
}
