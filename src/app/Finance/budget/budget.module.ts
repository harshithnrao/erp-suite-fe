import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { BudgetRoutingModule } from "./budget-routing.module";
import { BudgetCreateUpdateModule } from "./budget-create-update/budget-create-update.module";
import { BudgetComponent } from "./budget.component";
import { BudgetService } from "./budget.service";

@NgModule({
  imports: [
    BudgetRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    BudgetCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [BudgetComponent],
  exports: [BudgetComponent],
  providers: [BudgetService]
})
export class BudgetModule {
}
