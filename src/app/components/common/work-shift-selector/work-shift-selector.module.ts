import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WorkShiftSelectorComponent } from './work-shift-selector.component';
import { FormsModule } from '@angular/forms';
import { WorkShiftItemModule } from '../work-shift-item/work-shift-item.module';



@NgModule({
  declarations: [
    WorkShiftSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    WorkShiftItemModule
  ],
  exports : [
    WorkShiftSelectorComponent
  ]
})
export class WorkShiftSelectorModule { }
