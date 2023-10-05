import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrPage } from './hr.page';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'my-dashboard'
  },
  {
    path: '',
    component: HrPage,
    children : [
      {
        path: 'my-dashboard',
        loadChildren: () => import('./my-dashboard/my-dashboard.module').then( m => m.MyDashboardPageModule)
      },
      {
        path: 'timesheet',
        loadChildren: () => import('../pages/timesheet/timesheet.module').then( m => m.TimesheetPageModule)
      },
      {
        path: 'add-timesheet',
        loadChildren: () => import('../pages/add-timesheet/add-timesheet.module').then( m => m.AddTimesheetPageModule)
      },
      {
        path : 'users',
        loadChildren: () => import('../pages/users/users.module').then( m => m.UsersPageModule )
      },
      {
        path : 'add-user',
        loadChildren: () => import('../pages/add-user/add-user.module').then( m => m.AddUserPageModule )
      },
      {
        path: 'import-user',
        loadChildren: () => import('../pages/import-user/import-user.module').then( m => m.ImportUserPageModule)
      },
      {
        path: 'user-details',
        loadChildren: () => import('../pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPageRoutingModule {}
