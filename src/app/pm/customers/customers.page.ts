import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { CustomerService } from 'src/app/services/customer.service';
import { customer } from 'src/app/types/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(
    private api: ApiService,
    private cst: CustomerService
  ) { }

  ln: any = this.api.ln.data;

  ngOnInit() {
    this.search();
  }

  all: customer[] = [];
  filter: customer = {name : "", type : 'all'};
  search(){
    this.cst.search(this.filter).then(
      (res:any)=>{
        this.all = res;
      }
    )
  }


}
