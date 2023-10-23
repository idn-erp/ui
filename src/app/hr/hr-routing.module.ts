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
        loadChildren: () => import('./attendance/timesheet/timesheet.module').then( m => m.TimesheetPageModule)
      },
      {
        path: 'add-timesheet',
        loadChildren: () => import('./attendance/add-timesheet/add-timesheet.module').then( m => m.AddTimesheetPageModule)
      },
      {
        path : 'users',
        loadChildren: () => import('./user/users/users.module').then( m => m.UsersPageModule )
      },
      {
        path : 'add-user',
        loadChildren: () => import('./user/add-user/add-user.module').then( m => m.AddUserPageModule )
      },
      {
        path: 'import-user',
        loadChildren: () => import('./user/import-user/import-user.module').then( m => m.ImportUserPageModule)
      },
      {
        path: 'user-details',
        loadChildren: () => import('./user/user-details/user-details.module').then( m => m.UserDetailsPageModule)
      },
      {
        path: 'work-shift',
        loadChildren: () => import('./work-shift/work-shift.module').then( m => m.WorkShiftPageModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPageRoutingModule {}
