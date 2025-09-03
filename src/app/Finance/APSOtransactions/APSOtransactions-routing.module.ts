import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APSOTransactionsComponent } from './APSOtransactions.component';

const routes: Routes = [
  {
    path: '',
    component: APSOTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APSOTransactionsRoutingModule {
}
