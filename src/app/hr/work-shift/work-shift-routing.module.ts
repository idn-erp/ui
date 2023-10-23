import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkShiftPage } from './work-shift.page';

const routes: Routes = [
  {
    path: '',
    component: WorkShiftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkShiftPageRoutingModule {}
