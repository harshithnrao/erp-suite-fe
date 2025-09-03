import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { PayrollRoutingModule } from "./payroll-routing.module";
import { PayrollCreateUpdateModule } from "./payroll-create-update/payroll-create-update.module";
import { PayrollComponent } from "./payroll.component";
import { PayrollService } from "./payroll.service";

@NgModule({
  imports: [
    PayrollRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    PayrollCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [PayrollComponent],
  exports: [PayrollComponent],
  providers: [PayrollService]
})
export class PayrollModule {
}
