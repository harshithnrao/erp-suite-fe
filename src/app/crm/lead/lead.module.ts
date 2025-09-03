import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { LeadRoutingModule } from "./lead-routing.module";
import { LeadCreateUpdateModule } from "./lead-create-update/lead-create-update.module";
import { LeadComponent } from "./lead.component";
import { LeadService } from "./lead.service";

@NgModule({
  imports: [
    LeadRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    LeadCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [LeadComponent],
  exports: [LeadComponent],
  providers: [LeadService]
})
export class LeadModule {
}
