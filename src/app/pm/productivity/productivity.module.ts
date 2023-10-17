import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductivityPageRoutingModule } from './productivity-routing.module';

import { ProductivityPage } from './productivity.page';
import { BackButtonModule } from 'src/app/components/common/back-button/back-button.module';
import { PmTaskCountModule } from 'src/app/components/productivity/pm/pm-task-count/pm-task-count.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductivityPageRoutingModule,
    BackButtonModule,

    PmTaskCountModule
  ],
  declarations: [ProductivityPage]
})
export class ProductivityPageModule {}
