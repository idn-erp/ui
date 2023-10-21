import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportUserPageRoutingModule } from './import-user-routing.module';

import { ImportUserPage } from './import-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportUserPageRoutingModule
  ],
  declarations: [ImportUserPage]
})
export class ImportUserPageModule {}
