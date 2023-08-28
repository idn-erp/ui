import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerBasicComponent } from './customer-basic.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CustomerBasicComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    CustomerBasicComponent
  ]
})
export class CustomerBasicModule { }
