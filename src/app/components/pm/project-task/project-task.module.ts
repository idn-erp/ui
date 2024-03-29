import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTaskComponent } from './project-task.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TaskItemModule } from '../task-item/task-item.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProjectTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TaskItemModule,
    RouterModule
  ],
  exports : [
    ProjectTaskComponent
  ]
})
export class ProjectTaskModule { }
