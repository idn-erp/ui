import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationalSupervisorsPage } from './educational-supervisors.page';

const routes: Routes = [
  {
    path: '',
    component: EducationalSupervisorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationalSupervisorsPageRoutingModule {}
