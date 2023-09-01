import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskDetailsPageRoutingModule } from './task-details-routing.module';

import { TaskDetailsPage } from './task-details.page';
import { TaskBasicModule } from 'src/app/components/pm/task-basic/task-basic.module';
import { TaskSubtasksModule } from 'src/app/components/pm/task-subtasks/task-subtasks.module';
import { AssigneeModule } from 'src/app/components/common/assignee/assignee.module';
import { XlsReaderModule } from 'src/app/components/hr/xls-reader/xls-reader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskDetailsPageRoutingModule,
    TaskBasicModule,
    TaskSubtasksModule,
    AssigneeModule
  ],
  declarations: [TaskDetailsPage]
})
export class TaskDetailsPageModule {}
