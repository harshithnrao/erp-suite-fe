import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeCreateUpdateModule } from "./employee-create-update/employee-create-update.module";
import { EmployeeComponent } from "./employee.component";
import { EmployeeService } from "./employee.service";
import { DocumentCreateUpdateModule } from "./document-create-update/document-create-update.module";

@NgModule({
  imports: [
    EmployeeRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    EmployeeCreateUpdateModule,
    DocumentCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {
}
