import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { ModuleService } from '../services/common/module.service';
import { module } from '../types/interfaces';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  constructor(
    private api: ApiService,
    private mds: ModuleService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.load()
  }

  all: module[] = []
  async load(){
    this.all = await this.mds.get()
  }

}
