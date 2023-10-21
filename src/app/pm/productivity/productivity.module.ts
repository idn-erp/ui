import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductivityPageRoutingModule } from './productivity-routing.module';

import { ProductivityPage } from './productivity.page';
import { BackButtonModule } from 'src/app/components/common/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductivityPageRoutingModule,
    BackButtonModule,

  ],
  declarations: [ProductivityPage]
})
export class ProductivityPageModule {}
