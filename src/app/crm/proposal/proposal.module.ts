import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { ProposalRoutingModule } from "./proposal-routing.module";
import { ProposalCreateUpdateModule } from "./proposal-create-update/proposal-create-update.module";
import { ProposalComponent } from "./proposal.component";
import { ProposalService } from "./proposal.service";

@NgModule({
  imports: [
    ProposalRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    ProposalCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [ProposalComponent],
  exports: [ProposalComponent],
  providers: [ProposalService]
})
export class ProposalModule {
}
