import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './app.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule),
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./pages/authentication/register/register.module').then(m => m.RegisterModule),
  // },
  // {
  //   path: 'forgot-password',
  //   loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  // },
  // {
  //   path: 'coming-soon',
  //   loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  // },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        title:'ERP',
        data: { title: '#' },

      },
      // {
      //   path: 'quotes',
      //   loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule),
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'rates',
      //   loadChildren: () => import('./rate-sheet/rate-sheet.module').then(m => m.RateSheetModule),
      // },
      // {
      //   path: 'users',
      //   loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      // },
        {
          path: 'hrms/department',
          loadChildren: () => import('./HRMS/department/department.module').then(m => m.DepartmentModule),
          title: 'Department',
          data: { title: 'Department' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms/employee',
          loadChildren: () => import('./HRMS/employees/employee.module').then(m => m.EmployeeModule),
          title: 'Employees',
          data: { title: 'Employees' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms/leaves',
          loadChildren: () => import('./HRMS/leaves/leaves.module').then(m => m.LeavesModule),
          title: 'Leaves',
          data: { title: 'Leaves' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms/payroll',
          loadChildren: () => import('./HRMS/payroll/payroll.module').then(m => m.PayrollModule),
          title: 'Payroll',
          data: { title: 'Payroll' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms/document',
          loadChildren: () => import('./HRMS/document/document.module').then(m => m.DocumentModule),
          title: 'Document',
          data: { title: 'Document' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms/attendance',
          loadChildren: () => import('./HRMS/attendance/attendance.module').then(m => m.AttendanceModule),
          title: 'Attendance',
          data: { title: 'Attendance' },
          canActivate: [AuthGuard]
        },
        {
          path: 'hrms',
          loadChildren: () => import('./HRMS/hrms.module').then(m => m.HrmsModule),
          title: 'HRMS',
          data: { title: 'HRMS' },
          // canActivate: [AuthGuard]
        },
        {
          path: 'finance/accounts',
          loadChildren: () => import('./Finance/accounts/accounts.module').then(m => m.AccountsModule),
          title: 'Accounts',
          data: { title: 'Accounts' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/invoice',
          loadChildren: () => import('./Finance/invoice/invoice.module').then(m => m.InvoiceModule),
          title: 'Invoice',
          data: { title: 'Invoice' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/budget',
          loadChildren: () => import('./Finance/budget/budget.module').then(m => m.BudgetModule),
          title: 'Budget',
          data: { title: 'Budget' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/audit-log',
          loadChildren: () => import('./Finance/audit_log/audit_log.module').then(m => m.AuditLogModule),
          title: 'Audit Schedule',
          data: { title: 'Audit Schedule' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/orders',
          loadChildren: () => import('./Finance/order/order.module').then(m => m.OrderModule),
          title: 'Orders',
          data: { title: 'Orders' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/general-ledger',
          loadChildren: () => import('./Finance/general_ledger/general_ledger.module').then(m => m.GeneralLedgerModule),
          title: 'General Ledger',
          data: { title: 'General Ledger' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/accounts-receivable',
          loadChildren: () => import('./Finance/accounts_receivable/accounts_receivable.module').then(m => m.AccountsReceivableModule),
          title: 'Accounts Receivable',
          data: { title: 'Accounts Receivable' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/accounts-payable',
          loadChildren: () => import('./Finance/accounts_payable/accounts_payable.module').then(m => m.AccountsPayableModule),
          title: 'Accounts Payable',
          data: { title: 'Accounts Payable' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/appo-transactions',
          loadChildren: () => import('./Finance/APPOtransactions/APPOtransactions.module').then(m => m.APPOTransactionsModule),
          title: 'AP PO Transactions',
          data: { title: 'AP PO Transactions' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/apso-transactions',
          loadChildren: () => import('./Finance/APSOtransactions/APSOtransactions.module').then(m => m.APSOTransactionsModule),
          title: 'AP SO Transactions',
          data: { title: 'AP SO Transactions' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance/ar-transactions',
          loadChildren: () => import('./Finance/transactions/transactions.module').then(m => m.TransactionsModule),
          title: 'AR Transactions',
          data: { title: 'AR Transactions' },
          canActivate: [AuthGuard]
        },
        {
          path: 'finance',
          loadChildren: () => import('./Finance/finance.module').then(m => m.FinanceModule),
          title: 'Finance',
          data: { title: 'Finance' },
          // canActivate: [AuthGuard]
        },
        {
          path: 'scm',
          loadChildren: () => import('./scm/scm.module').then(m => m.ScmModule),
          title: 'SCM',
          data: { title: 'SCM' },
          // canActivate: [AuthGuard]
        },
        {
          path: 'scm/category',
          loadChildren: () => import('./scm/category/category.module').then(m => m.CategoryModule),
          title: 'Categories',
          data: { title: 'Categories' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/distribution-center',
          loadChildren: () => import('./scm/distribution-center/distribution-center.module').then(m => m.DistributionCenterModule),
          title: 'Distribution Centers',
          data: { title: 'Distribution Centers' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/zone',
          loadChildren: () => import('./scm/zone/zone.module').then(m => m.ZoneModule),
          title: 'Zones',
          data: { title: 'Zones' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/ratesheet',
          loadChildren: () => import('./scm/ratesheet/ratesheet.module').then(m => m.RatesheetModule),
          title: 'Rate Sheet',
          data: { title: 'Rate Sheet' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/customer',
          loadChildren: () => import('./scm/customer/customer.module').then(m => m.CustomerModule),
          title: 'Customers',
          data: { title: 'Customers' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/vendor',
          loadChildren: () => import('./scm/vendor/vendor.module').then(m => m.VendorModule),
          title: 'Vendors',
          data: { title: 'Vendors' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/logistics',
          loadChildren: () => import('./scm/logistics/logistics.module').then(m => m.LogisticsModule),
          title: 'Logistics',
          data: { title: 'Logistics' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/item',
          loadChildren: () => import('./scm/item/item.module').then(m => m.ItemModule),
          title: 'Items',
          data: { title: 'Items' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/po',
          loadChildren: () => import('./scm/PO/po.module').then(m => m.POModule),
          title: 'Purchase Orders',
          data: { title: 'Purchase Orders' },
          canActivate: [AuthGuard]
        },
        {
          path: 'scm/so',
          loadChildren: () => import('./scm/SO/so.module').then(m => m.SOModule),
          title: 'Service Orders',
          data: { title: 'Service Orders' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm',
          loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule),
          title: 'CRM',
          data: { title: 'CRM' },
          // canActivate: [AuthGuard]
        },
        {
          path: 'crm/lead',
          loadChildren: () => import('./crm/lead/lead.module').then(m => m.LeadModule),
          title: 'Leads',
          data: { title: 'Leads' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/follow-up',
          loadChildren: () => import('./crm/follow-up/follow-up.module').then(m => m.FollowUpModule),
          title: 'Follow-Up',
          data: { title: 'Follow-Up' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/log',
          loadChildren: () => import('./crm/log/log.module').then(m => m.LogModule),
          title: 'Logs',
          data: { title: 'Logs' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/contract',
          loadChildren: () => import('./crm/contract/contract.module').then(m => m.ContractModule),
          title: 'Contracts',
          data: { title: 'Contracts' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/proposal',
          loadChildren: () => import('./crm/proposal/proposal.module').then(m => m.ProposalModule),
          title: 'Proposals',
          data: { title: 'Proposals' },
          canActivate: [AuthGuard]
        },
        {
          path: 'crm/feedback',
          loadChildren: () => import('./crm/feedbacks/feedback.module').then(m => m.FeedbackModule),
          title: 'Feedbacks',
          data: { title: 'Feedbacks' },
          canActivate: [AuthGuard]
        }
      
      
          
      // {
      //   path: 'apps/inbox',
      //   loadChildren: () => import('./pages/apps/inbox/inbox.module').then(m => m.InboxModule),
      // },
      // {
      //   path: 'apps/calendar',
      //   loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarAppModule),
      // },
      // {
      //   path: 'apps/chat',
      //   loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
      // },
      // {
      //   path: 'components',
      //   loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule),
      // },
      // {
      //   path: 'forms/form-elements',
      //   loadChildren: () => import('./pages/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
      // },
      // {
      //   path: 'forms/form-wizard',
      //   loadChildren: () => import('./pages/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule),
      // },
      // {
      //   path: 'page-layouts',
      //   loadChildren: () => import('./pages/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
      // },
      // {
      //   path: 'tables/all-in-one-table',
      //   loadChildren: () => import('./pages/tables/all-in-one-table/all-in-one-table.module').then(m => m.AllInOneTableModule),
      // },
      // {
      //   path: 'drag-and-drop',
      //   loadChildren: () => import('./pages/drag-and-drop/drag-and-drop.module').then(m => m.DragAndDropModule)
      // },
      // {
      //   path: 'editor',
      //   loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule),
      // },
      // {
      //   path: 'blank',
      //   loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankModule),
      // },
      // {
      //   path: 'level1/level2/level3/level4/level5',
      //   loadChildren: () => import('./pages/level5/level5.module').then(m => m.Level5Module),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
