import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { ZoneRoutingModule } from "./zone-routing.module";
import { ZoneCreateUpdateModule } from "./zone-create-update/zone-create-update.module";
import { ZoneComponent } from "./zone.component";
import { ZoneService } from "./zone.service";

@NgModule({
  imports: [
    ZoneRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    ZoneCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [ZoneComponent],
  exports: [ZoneComponent],
  providers: [ZoneService]
})
export class ZoneModule {
}
