import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
  }


}
