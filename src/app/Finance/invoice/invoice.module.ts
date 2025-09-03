import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { InvoiceRoutingModule } from "./invoice-routing.module";
import { InvoiceCreateUpdateModule } from "./invoice-create-update/invoice-create-update.module";
import { InvoiceComponent } from "./invoice.component";
import { InvoiceService } from "./invoice.service";

@NgModule({
  imports: [
    InvoiceRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    InvoiceCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [InvoiceComponent],
  exports: [InvoiceComponent],
  providers: [InvoiceService]
})
export class InvoiceModule {
}
