import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheTeachersPageRoutingModule } from './the-teachers-routing.module';

import { TheTeachersPage } from './the-teachers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheTeachersPageRoutingModule
  ],
  declarations: [TheTeachersPage]
})
export class TheTeachersPageModule {}
