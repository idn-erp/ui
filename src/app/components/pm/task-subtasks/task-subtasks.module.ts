import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSubtasksComponent } from './task-subtasks.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskSubtasksComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    TaskSubtasksComponent
  ]
})
export class TaskSubtasksModule { }
