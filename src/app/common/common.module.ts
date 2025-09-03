import { NgModule } from "@angular/core";
import { CommonService } from "./common.service";
import { MaterialModule } from "src/@fury/shared/material-components.module";

@NgModule({
  imports: [MaterialModule],
  declarations: [],
  exports: [],
  providers: [CommonService]
})
export class CommonComponentsModule {
}
