import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmPage } from './pm.page';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'my-dashboard'
  },
  {
    path: '',
    component: PmPage,
    children : [
      {
        path: 'my-dashboard',
        loadChildren: () => import('./my-dashboard/my-dashboard.module').then( m => m.MyDashboardPageModule)
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
      },
      {
        path: 'customer-details',
        loadChildren: () => import('./customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
      },
      {
        path: 'project-details',
        loadChildren: () => import('./project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
      },
      {
        path: 'task-details',
        loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
      },
      {
        path: 'attachment',
        loadChildren: () => import('../pages/attachment/attachment.module').then( m => m.AttachmentPageModule)
      },
      {
        path: 'add-attachment',
        loadChildren: () => import('../pages/add-attachment/add-attachment.module').then( m => m.AddAttachmentPageModule)
      },
      {
        path: 'productivity',
        loadChildren: () => import('./productivity/productivity.module').then( m => m.ProductivityPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmPageRoutingModule {}
