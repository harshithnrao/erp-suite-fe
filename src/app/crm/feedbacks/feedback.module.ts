import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { FeedbackRoutingModule } from "./feedback-routing.module";
import { FeedbackCreateUpdateModule } from "./feedback-create-update/feedback-create-update.module";
import { FeedbackComponent } from "./feedback.component";
import { FeedbackService } from "./feedback.service";

@NgModule({
  imports: [
    FeedbackRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    FeedbackCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [FeedbackComponent],
  exports: [FeedbackComponent],
  providers: [FeedbackService]
})
export class FeedbackModule {
}
