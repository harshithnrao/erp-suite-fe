import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryCreateUpdateModule } from "./category-create-update/category-create-update.module";
import { CategoryComponent } from "./category.component";
import { CategoryService } from "./category.service";

@NgModule({
  imports: [
    CategoryRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    CategoryCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  providers: [CategoryService]
})
export class CategoryModule {
}
