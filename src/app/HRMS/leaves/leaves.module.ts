import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { LeavesRoutingModule } from "./leaves-routing.module";
import { LeavesCreateUpdateModule } from "./leaves-create-update/leaves-create-update.module";
import { LeavesComponent } from "./leaves.component";
import { LeavesService } from "./leaves.service";

@NgModule({
  imports: [
    LeavesRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    LeavesCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [LeavesComponent],
  exports: [LeavesComponent],
  providers: [LeavesService]
})
export class LeavesModule {
}
