import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentSelectorComponent } from './department-selector.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    DepartmentSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    DepartmentSelectorComponent
  ]
})
export class DepartmentSelectorModule { }
