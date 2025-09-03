import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesheetComponent } from './ratesheet.component';

const routes: Routes = [
  {
    path: '',
    component: RatesheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesheetRoutingModule {
}
