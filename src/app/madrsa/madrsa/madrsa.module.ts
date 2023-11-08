import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadrsaPageRoutingModule } from './madrsa-routing.module';

import { MadrsaPage } from './madrsa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadrsaPageRoutingModule
  ],
  declarations: [MadrsaPage]
})
export class MadrsaPageModule {}
