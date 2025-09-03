import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APPOTransactionsComponent } from './APPOtransactions.component';

const routes: Routes = [
  {
    path: '',
    component: APPOTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APPOTransactionsRoutingModule {
}
