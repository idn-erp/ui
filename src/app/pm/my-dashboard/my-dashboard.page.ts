import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.page.html',
  styleUrls: ['./my-dashboard.page.scss'],
})
export class MyDashboardPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
