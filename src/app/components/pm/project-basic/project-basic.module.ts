import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBasicComponent } from './project-basic.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ProjectBasicComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    ProjectBasicComponent
  ]
})
export class ProjectBasicModule { }
