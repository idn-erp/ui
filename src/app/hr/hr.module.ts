import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HrPageRoutingModule } from './hr-routing.module';

import { HrPage } from './hr.page';
import { UserToolbarModule } from '../components/common/user-toolbar/user-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HrPageRoutingModule,
    UserToolbarModule
  ],
  declarations: [HrPage]
})
export class HrPageModule {}
