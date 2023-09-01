import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectorComponent } from './user-selector.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    UserSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    UserSelectorComponent
  ]
})
export class UserSelectorModule { }
