import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimesheetPageRoutingModule } from './timesheet-routing.module';

import { TimesheetPage } from './timesheet.page';
import { BackButtonModule } from 'src/app/components/common/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimesheetPageRoutingModule,
    BackButtonModule
  ],
  declarations: [TimesheetPage]
})
export class TimesheetPageModule {}
