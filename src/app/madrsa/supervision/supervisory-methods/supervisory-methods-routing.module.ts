import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisoryMethodsPage } from './supervisory-methods.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisoryMethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisoryMethodsPageRoutingModule {}
