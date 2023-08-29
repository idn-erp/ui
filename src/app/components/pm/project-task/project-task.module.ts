import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTaskComponent } from './project-task.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports : [
    ProjectTaskComponent
  ]
})
export class ProjectTaskModule { }
