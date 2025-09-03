import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { DepartmentRoutingModule } from "./department-routing.module";
import { DepartmentCreateUpdateModule } from "./department-create-update/department-create-update.module";
import { DepartmentComponent } from "./department.component";
import { DepartmentService } from "./department.service";

@NgModule({
  imports: [
    DepartmentRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    DepartmentCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [DepartmentComponent],
  exports: [DepartmentComponent],
  providers: [DepartmentService]
})
export class DepartmentModule {
}
