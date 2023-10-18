import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { UserService } from 'src/app/services/common/user.service';
import { department } from 'src/app/types/interfaces';


@Component({
  selector: 'app-daily-attendance-chart',
  templateUrl: './daily-attendance-chart.component.html',
  styleUrls: ['./daily-attendance-chart.component.scss'],
})
export class DailyAttendanceChartComponent  implements OnInit {

  @ViewChild('barCanvas', {static: true}) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;

  constructor(
    private api: ApiService,
    private dps: DepartmentService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit(): void {
    this.load_deps()
  }

  deps: department[] = []
  selected_dep: string;
  selected_date: string;
  async load_deps(){
    if(this.deps.length==0){
      this.deps = await this.dps.get_allowed();
      this.selected_dep = this.deps[0].id;
      let d = new Date();
      d.setDate( d.getDate() - 1 );
      this.selected_date = d.toISOString().split('T')[0];
      this.load_data()
    }
  }

  load_data(){
    
  }

  barChartMethod(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type : 'bar',
      data : {
        labels : [ 
          this.ln.delayed_checkin || "Late Checkin", 
          this.ln.no_checkin || "No Checkin", 
          this.ln.early_checkout || "Early Checkout", 
          this.ln.no_checkout || "No Checkout", 
          this.ln.absent || "Absent" ],
        datasets : [
          {
            label : "17 October 2023",
            data : [ 5,7,4,9,2 ]
          }
        ]
      }
    })
    console.log( this.barChart );
  }

}
