import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderCreateUpdateModule } from "./order-create-update/order-create-update.module";
import { OrderComponent } from "./order.component";
import { OrderService } from "./order.service";

@NgModule({
  imports: [
    OrderRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    OrderCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [OrderComponent],
  exports: [OrderComponent],
  providers: [OrderService]
})
export class OrderModule {
}
