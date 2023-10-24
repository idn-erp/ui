import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionPage } from './supervision.page';

const routes: Routes = [
  
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'the-teachers'
  },
  {
    path: '',
    component: SupervisionPage,
    children : [
      {
        path: 'the-teachers',
        loadChildren: () => import('./the-teachers/the-teachers.module').then( m => m.TheTeachersPageModule)
      },
      {
        path: 'educational-supervisors',
        loadChildren: () => import('./educational-supervisors/educational-supervisors.module').then( m => m.EducationalSupervisorsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionPageRoutingModule {}
