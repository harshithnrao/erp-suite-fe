import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { ItemRoutingModule } from "./item-routing.module";
import { ItemCreateUpdateModule } from "./item-create-update/item-create-update.module";
import { ItemComponent } from "./item.component";
import { ItemService } from "./item.service";

@NgModule({
  imports: [
    ItemRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    ItemCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [ItemComponent],
  exports: [ItemComponent],
  providers: [ItemService]
})
export class ItemModule {
}
