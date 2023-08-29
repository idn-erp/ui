import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { customer } from '../../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private api: ApiService
  ) { }
  
  search( filter: customer ){
    return new Promise(
      Res=>{
        this.api.sp( 'customer/search', [filter.name, filter.type] ).then(
          (res:any)=>{
            Res( res.ok ? res.data : [] );
          }
        )
      }
    )
  }

  get(customer_id: string){
    return new Promise(
      Res=>{
        this.api.sp( 'customer/get', [customer_id] ).then(
          (res:any)=>{
            Res( res.ok ? res.data[0] : {} );
          }
        )
      }
    )
  }
  
  get_projects(customer_id: string){
    return new Promise(
      Res=>{
        this.api.sp( 'customer/get_projects', [customer_id] ).then(
          (res:any)=>{
            Res( res.ok ? res.data : [] );
          }
        )
      }
    )
  }

}
