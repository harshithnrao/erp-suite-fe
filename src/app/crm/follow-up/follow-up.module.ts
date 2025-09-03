import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { FollowUpRoutingModule } from "./follow-up-routing.module";
import { FollowUpCreateUpdateModule } from "./follow-up-create-update/follow-up-create-update.module";
import { FollowUpComponent } from "./follow-up.component";
import { FollowUpService } from "./follow-up.service";

@NgModule({
  imports: [
    FollowUpRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    FollowUpCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [FollowUpComponent],
  exports: [FollowUpComponent],
  providers: [FollowUpService]
})
export class FollowUpModule {
}
