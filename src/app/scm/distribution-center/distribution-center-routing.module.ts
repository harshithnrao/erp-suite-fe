import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionCenterComponent } from './distribution-center.component';

const routes: Routes = [
  {
    path: '',
    component: DistributionCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributionCenterRoutingModule {
}
