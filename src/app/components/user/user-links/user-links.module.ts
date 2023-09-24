import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDepartmentComponent } from '../user-department/user-department.component';
import { UserDesignationComponent } from '../user-designation/user-designation.component';
import { UserShiftComponent } from '../user-shift/user-shift.component';
import { UserGroupComponent } from '../user-group/user-group.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDepartmentComponent,
    UserDesignationComponent,
    UserShiftComponent,
    UserGroupComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    UserDepartmentComponent,
    UserDesignationComponent,
    UserShiftComponent,
    UserGroupComponent
  ]
})
export class UserLinksModule { }
