import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { page } from '../types/interfaces';
import { PageService } from '../services/common/page.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor(
    private api: ApiService,
    private pgs: PageService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
    this.load()
  }

  all: page[] = []
  async load(){
    this.all = await this.pgs.get('attendance')
  }

}
