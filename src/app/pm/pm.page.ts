import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { page } from '../types/interfaces';
import { PageService } from '../services/common/page.service';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.page.html',
  styleUrls: ['./pm.page.scss'],
})
export class PmPage implements OnInit {

  constructor(
    private api: ApiService,
    private pgs: PageService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.load()
  }

  all: page[] = []
  async load(){
    this.all = await this.pgs.get('project_management')
  }

}
