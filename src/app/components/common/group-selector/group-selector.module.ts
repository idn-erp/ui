import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupSelectorComponent } from './group-selector.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroupSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    GroupSelectorComponent
  ]
})
export class GroupSelectorModule { }
