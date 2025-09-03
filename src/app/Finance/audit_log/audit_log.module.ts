import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { AuditLogRoutingModule } from "./audit_log-routing.module";
import { AuditLogCreateUpdateModule } from "./audit_log-create-update/audit_log-create-update.module";
import { AuditLogComponent } from "./audit_log.component";
import { AuditLogService } from "./audit_log.service";

@NgModule({
  imports: [
    AuditLogRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    AuditLogCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [AuditLogComponent],
  exports: [AuditLogComponent],
  providers: [AuditLogService]
})
export class AuditLogModule {
}
