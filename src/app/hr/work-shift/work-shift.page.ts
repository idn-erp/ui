import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-work-shift',
  templateUrl: './work-shift.page.html',
  styleUrls: ['./work-shift.page.scss'],
})
export class WorkShiftPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = {}
  ngOnInit() {
  }

}
