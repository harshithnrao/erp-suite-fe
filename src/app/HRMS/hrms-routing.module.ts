import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrmsComponent } from './hrms.component';
// import { EmployeeComponent } from './employees/employee.component';
// import { CompanyComponent } from './companies/company.component';

const routes: Routes = [
  {
    path: '',
    component: HrmsComponent
  }
    // { path: '', loadChildren: () => import('./hrms.module').then(m => m.HrmsModule) },
    // { path: 'companies', loadChildren: () => import('./companies/company.module').then(m => m.CompanyModule) },
    // { path: 'employees', loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule) },
    // { path: '', redirectTo: 'companies', pathMatch: 'full' }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HrmsRoutingModule {
}
