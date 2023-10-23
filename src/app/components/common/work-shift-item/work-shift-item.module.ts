import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkShiftItemComponent } from './work-shift-item.component';
import { IonicModule } from '@ionic/angular';
import { PipeUtilsModule } from 'src/app/pipes/pipe-utils/pipe-utils.module';



@NgModule({
  declarations: [
    WorkShiftItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeUtilsModule
  ],
  exports : [
    WorkShiftItemComponent
  ]
})
export class WorkShiftItemModule { }
