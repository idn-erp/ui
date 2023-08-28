import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmPageRoutingModule } from './pm-routing.module';

import { PmPage } from './pm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmPageRoutingModule
  ],
  declarations: [PmPage]
})
export class PmPageModule {}
