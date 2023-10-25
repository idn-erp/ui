import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationalSupervisorsPageRoutingModule } from './educational-supervisors-routing.module';

import { EducationalSupervisorsPage } from './educational-supervisors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationalSupervisorsPageRoutingModule
  ],
  declarations: [EducationalSupervisorsPage]
})
export class EducationalSupervisorsPageModule {}
