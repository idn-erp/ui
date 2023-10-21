import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkShiftItemComponent } from './work-shift-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    WorkShiftItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    WorkShiftItemComponent
  ]
})
export class WorkShiftItemModule { }
