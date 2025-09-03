import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FurySharedModule } from "src/@fury/fury-shared.module";
import { MaterialModule } from "src/@fury/shared/material-components.module";
import { ListModule } from "src/@fury/shared/list/list.module";
import { BreadcrumbsModule } from "src/@fury/shared/breadcrumbs/breadcrumbs.module";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { UserCreateUpdateModule } from "./user-create-update/user-create-update.module";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  imports: [
    UserRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    CommonModule,
    UserCreateUpdateModule,
    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule {
}
