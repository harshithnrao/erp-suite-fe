import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLedgerComponent } from './general_ledger.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralLedgerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralLedgerRoutingModule {
}
