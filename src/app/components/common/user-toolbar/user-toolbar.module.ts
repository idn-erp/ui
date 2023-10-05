import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserToolbarComponent } from './user-toolbar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    UserToolbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    UserToolbarComponent
  ]
})
export class UserToolbarModule { }
