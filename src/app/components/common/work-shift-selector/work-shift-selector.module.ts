import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WorkShiftSelectorComponent } from './work-shift-selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkShiftSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    WorkShiftSelectorComponent
  ]
})
export class WorkShiftSelectorModule { }
