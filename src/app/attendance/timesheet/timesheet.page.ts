import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.page.html',
  styleUrls: ['./timesheet.page.scss'],
})
export class TimesheetPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
  }

}
