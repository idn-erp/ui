import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTimesheetPageRoutingModule } from './add-timesheet-routing.module';

import { AddTimesheetPage } from './add-timesheet.page';
import { BackButtonModule } from 'src/app/components/common/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTimesheetPageRoutingModule,
    BackButtonModule
  ],
  declarations: [AddTimesheetPage]
})
export class AddTimesheetPageModule {}
