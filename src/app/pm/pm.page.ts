import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { page } from '../types/interfaces';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.page.html',
  styleUrls: ['./pm.page.scss'],
})
export class PmPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  menus: page[] = [
    {
      name : "Customers",
      path : ['/pm', 'customers']
    },
    {
      name : "Projects",
      path : ['/pm','projects']
    }
  ]

  ngOnInit() {
    console.log(this.ln)
  }

}
