import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HrPageRoutingModule } from './hr-routing.module';

import { HrPage } from './hr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HrPageRoutingModule
  ],
  declarations: [HrPage]
})
export class HrPageModule {}
