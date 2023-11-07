import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisoryMethodsPageRoutingModule } from './supervisory-methods-routing.module';

import { SupervisoryMethodsPage } from './supervisory-methods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupervisoryMethodsPageRoutingModule
  ],
  declarations: [SupervisoryMethodsPage]
})
export class SupervisoryMethodsPageModule {}
