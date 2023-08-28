import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { CustomerService } from 'src/app/services/customer.service';
import { customer } from 'src/app/types/interfaces';

@Component({
  selector: 'app-customer-basic',
  templateUrl: './customer-basic.component.html',
  styleUrls: ['./customer-basic.component.scss'],
})
export class CustomerBasicComponent  implements OnInit {

  constructor(
    private acr: ActivatedRoute,
    private cst: CustomerService,
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      params=>{
        this.customer_id = params['customer_id'];
        this.load();
      }
    )
  }

  customer_id: string = "";
  cust: customer = {};
  load(){
    this.cst.get(this.customer_id).then(
      (res:any)=>{
        this.cust = res;
      }
    )
  }

}
