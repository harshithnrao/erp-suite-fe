import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { DistributionCenterRoutingModule } from "./distribution-center-routing.module";
import { DistributionCenterCreateUpdateModule } from "./distribution-center-create-update/distribution-center-create-update.module";
import { DistributionCenterComponent } from "./distribution-center.component";
import { DistributionCenterService } from "./distribution-center.service";

@NgModule({
  imports: [
    DistributionCenterRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    DistributionCenterCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [DistributionCenterComponent],
  exports: [DistributionCenterComponent],
  providers: [DistributionCenterService]
})
export class DistributionCenterModule {
}
