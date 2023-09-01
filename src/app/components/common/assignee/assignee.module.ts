import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigneeComponent } from './assignee.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserSelectorModule } from '../user-selector/user-selector.module';



@NgModule({
  declarations: [
    AssigneeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    UserSelectorModule
  ],
  exports : [
    AssigneeComponent
  ]
})
export class AssigneeModule { }
