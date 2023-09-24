import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { PageService } from '../services/common/page.service';
import { page } from '../types/interfaces';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.page.html',
  styleUrls: ['./hr.page.scss'],
})
export class HrPage implements OnInit {

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
    this.all = await this.pgs.get('human_resource')
  }

}
