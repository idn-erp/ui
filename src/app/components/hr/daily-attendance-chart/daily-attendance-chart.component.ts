import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-daily-attendance-chart',
  templateUrl: './daily-attendance-chart.component.html',
  styleUrls: ['./daily-attendance-chart.component.scss'],
})
export class DailyAttendanceChartComponent  implements OnInit {

  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;

  constructor() { }

  ngOnInit() {}

  barChartMethod(){
    
  }

}
