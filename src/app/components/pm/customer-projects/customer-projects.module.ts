import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProjectsComponent } from './customer-projects.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports : [
    CustomerProjectsComponent
  ]
})
export class CustomerProjectsModule { }
