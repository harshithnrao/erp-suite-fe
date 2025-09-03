import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { AttendanceRoutingModule } from "./attendance-routing.module";
import { AttendanceCreateUpdateModule } from "./attendance-create-update/attendance-create-update.module";
import { AttendanceComponent } from "./attendance.component";
import { AttendanceService } from "./attendance.service";

@NgModule({
  imports: [
    AttendanceRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    AttendanceCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [AttendanceComponent],
  exports: [AttendanceComponent],
  providers: [AttendanceService]
})
export class AttendanceModule {
}
