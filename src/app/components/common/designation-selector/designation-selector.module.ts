import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationSelectorComponent } from './designation-selector.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DesignationSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    DesignationSelectorComponent
  ]
})
export class DesignationSelectorModule { }
