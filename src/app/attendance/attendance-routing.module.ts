import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancePage } from './attendance.page';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'my-dashboard'
  },
  {
    path: '',
    component: AttendancePage,
    children : [
      {
        path: 'my-dashboard',
        loadChildren: () => import('./my-dashboard/my-dashboard.module').then( m => m.MyDashboardPageModule)
      },
      {
        path: 'timesheet',
        loadChildren: () => import('./timesheet/timesheet.module').then( m => m.TimesheetPageModule)
      },
      {
        path: 'add-timesheet',
        loadChildren: () => import('./add-timesheet/add-timesheet.module').then( m => m.AddTimesheetPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancePageRoutingModule {}
