import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkShiftPageRoutingModule } from './work-shift-routing.module';

import { WorkShiftPage } from './work-shift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkShiftPageRoutingModule
  ],
  declarations: [WorkShiftPage]
})
export class WorkShiftPageModule {}
