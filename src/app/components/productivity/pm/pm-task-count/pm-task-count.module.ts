import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmTaskCountComponent } from './pm-task-count.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PmTaskCountComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports : [
    PmTaskCountComponent
  ]
})
export class PmTaskCountModule { }
