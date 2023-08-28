import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProjectsComponent } from './customer-projects.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports : [
    CustomerProjectsComponent
  ]
})
export class CustomerProjectsModule { }
