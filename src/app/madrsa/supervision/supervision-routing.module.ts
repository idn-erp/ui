import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionPage } from './supervision.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionPageRoutingModule {}
