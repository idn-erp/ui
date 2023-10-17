import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAttendanceChartComponent } from './daily-attendance-chart.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DailyAttendanceChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports : [
    DailyAttendanceChartComponent
  ]
})
export class DailyAttendanceChartModule { }
