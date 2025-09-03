import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POComponent } from './po.component';

const routes: Routes = [
  {
    path: '',
    component: POComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PORoutingModule {
}
