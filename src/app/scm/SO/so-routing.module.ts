import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SOComponent } from './so.component';

const routes: Routes = [
  {
    path: '',
    component: SOComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SORoutingModule {
}
