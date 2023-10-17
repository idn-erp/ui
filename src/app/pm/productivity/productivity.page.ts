import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.page.html',
  styleUrls: ['./productivity.page.scss'],
})
export class ProductivityPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
