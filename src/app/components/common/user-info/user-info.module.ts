import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    UserInfoComponent
  ]
})
export class UserInfoModule { }
