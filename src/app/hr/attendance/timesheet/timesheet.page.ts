import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { TimesheetService } from 'src/app/services/common/timesheet.service';
import { department, shift, timesheet, timesheet_filter } from 'src/app/types/interfaces';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.page.html',
  styleUrls: ['./timesheet.page.scss'],
})
export class TimesheetPage implements OnInit {

  constructor(
    private api: ApiService,
    private tms: TimesheetService,
    private sfs: ShiftService,
    private dps: DepartmentService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
    this.load_filters()
  }

  filter: timesheet_filter = {
    type : 'specific',
    date : new Date().toISOString().split('T')[0],
    date_from : new Date().toISOString().split('T')[0],
    date_to : new Date().toISOString().split('T')[0],
    department_id : 0,
    file : '',
    name : '',
    shift_id : 0,
    is_in_delay : 'all',
    is_out_early : 'all',
    is_absent : 'all'
  }
  shifts: shift[] = []
  deps: department[] = []
  async load_filters(){
    this.shifts = await this.sfs.get()
    this.deps = await this.dps.getall()
    this.search()
  }

  all: timesheet[] = []
  busy: boolean = false
  async search(){
    if( this.filter.type=='range' && (!this.filter.date_from || !this.filter.date_to) ){
      this.api.Toast(this.ln.select_date_range || "Select date range")
      return
    }
    if( this.filter.type=='specific' && !this.filter.date ){
      this.api.Toast(this.ln.select_date || "Select date")
      return
    }
    this.busy = true
    let tmp = await this.tms.search(this.filter)
    this.busy = false
    this.all = tmp.map((x:timesheet)=>{
      x.date = x.date.split('T')[0]
      return x;
    })
  }

}
