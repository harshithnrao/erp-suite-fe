import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { VendorRoutingModule } from "./vendor-routing.module";
import { VendorCreateUpdateModule } from "./vendor-create-update/vendor-create-update.module";
import { VendorComponent } from "./vendor.component";
import { VendorService } from "./vendor.service";

@NgModule({
  imports: [
    VendorRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    VendorCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [VendorComponent],
  exports: [VendorComponent],
  providers: [VendorService]
})
export class VendorModule {
}
