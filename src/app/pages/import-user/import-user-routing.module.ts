import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportUserPage } from './import-user.page';

const routes: Routes = [
  {
    path: '',
    component: ImportUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportUserPageRoutingModule {}
