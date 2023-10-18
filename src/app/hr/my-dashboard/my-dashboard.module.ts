import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDashboardPageRoutingModule } from './my-dashboard-routing.module';

import { MyDashboardPage } from './my-dashboard.page';
import { BackButtonModule } from 'src/app/components/common/back-button/back-button.module';
import { DailyAttendanceChartModule } from 'src/app/components/hr/daily-attendance-chart/daily-attendance-chart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDashboardPageRoutingModule,
    BackButtonModule,
    DailyAttendanceChartModule
  ],
  declarations: [MyDashboardPage]
})
export class MyDashboardPageModule {}
