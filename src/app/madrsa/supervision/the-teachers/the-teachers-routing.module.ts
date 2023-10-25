import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheTeachersPage } from './the-teachers.page';

const routes: Routes = [
  {
    path: '',
    component: TheTeachersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheTeachersPageRoutingModule {}
