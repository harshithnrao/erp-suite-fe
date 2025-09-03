import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';
// import { EmployeeComponent } from './employees/employee.component';
// import { CompanyComponent } from './companies/company.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceComponent
  }
    // { path: '', loadChildren: () => import('./finance.module').then(m => m.FinanceModule) },
    // { path: 'companies', loadChildren: () => import('./companies/company.module').then(m => m.CompanyModule) },
    // { path: 'employees', loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule) },
    // { path: '', redirectTo: 'companies', pathMatch: 'full' }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinanceRoutingModule {
}
