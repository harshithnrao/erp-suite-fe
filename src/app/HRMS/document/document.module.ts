import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { DocumentRoutingModule } from "./document-routing.module";
import { DocumentCreateUpdateModule } from "./document-create-update/document-create-update.module";
import { DocumentComponent } from "./document.component";
import { DocumentService } from "./document.service";

@NgModule({
  imports: [
    DocumentRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    DocumentCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [DocumentComponent],
  exports: [DocumentComponent],
  providers: [DocumentService]
})
export class DocumentModule {
}
