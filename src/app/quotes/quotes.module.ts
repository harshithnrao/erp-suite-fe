import { NgModule } from "@angular/core";
import { QuotesService } from "./quotes.service";
import { QuotesComponent } from "./quotes.component";
import { QuotesRoutingModule } from "./quotes-routing.module";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { QuotesCreateUpdateModule } from "./quotes-create-update/quotes-create-update.module";

@NgModule({
  imports: [
    QuotesRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    QuotesCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [QuotesComponent],
  exports: [QuotesComponent],
  providers: [QuotesService]
})
export class QuotesModule {
}
