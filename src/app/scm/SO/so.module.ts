import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { SORoutingModule } from "./so-routing.module";
import { SOCreateUpdateModule } from "./so-create-update/so-create-update.module";
import { SOComponent } from "./so.component";
import { SOService } from "./so.service";

@NgModule({
  imports: [
    SORoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    SOCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [SOComponent],
  exports: [SOComponent],
  providers: [SOService]
})
export class SOModule {
}
