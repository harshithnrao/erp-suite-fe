import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsReceivableComponent } from './accounts_receivable.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsReceivableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsReceivableRoutingModule {
}
