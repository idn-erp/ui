import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDepartmentComponent } from '../user-department/user-department.component';
import { UserDesignationComponent } from '../user-designation/user-designation.component';
import { UserShiftComponent } from '../user-shift/user-shift.component';
import { UserGroupComponent } from '../user-group/user-group.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DepartmentSelectorModule } from '../../common/department-selector/department-selector.module';
import { GroupSelectorModule } from '../../common/group-selector/group-selector.module';
import { DesignationSelectorModule } from '../../common/designation-selector/designation-selector.module';
import { WorkShiftSelectorModule } from '../../common/work-shift-selector/work-shift-selector.module';
import { WorkShiftItemModule } from '../../common/work-shift-item/work-shift-item.module';



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
    FormsModule,
    DepartmentSelectorModule,
    DesignationSelectorModule,
    GroupSelectorModule,
    WorkShiftSelectorModule,
    WorkShiftItemModule
  ],
  exports : [
    UserDepartmentComponent,
    UserDesignationComponent,
    UserShiftComponent,
    UserGroupComponent
  ]
})
export class UserLinksModule { }
