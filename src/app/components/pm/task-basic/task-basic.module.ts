import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBasicComponent } from './task-basic.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskBasicComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports : [
    TaskBasicComponent
  ]
})
export class TaskBasicModule { }
