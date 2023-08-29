import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { project } from '../../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private api: ApiService
  ) { }

  get( id:string ){
    return new Promise(
      Res=>{
        this.api.sp( 'project/get', [id] ).then(
          (res:any)=>{
            Res( res.ok ? res.data[0] : {} );
          }
        )
      }
    )
  }

  search( proj: project ){
    return new Promise(
      Res=>{
        this.api.sp( 'project/search', [proj.code, proj.name, proj.type, proj.status] ).then(
          (res:any)=>{
            Res( res.ok ? res.data : [] );
          }
        )
      }
    )
  }

  create( proj: project ){
    return new Promise(
      Res=>{
        this.api.sp( 
          'project/create', 
          [proj.customer_id, proj.code, proj.name, proj.type, proj.deadline] ).then(
            (res:any)=>{
              Res( res );
            }
          );
      }
    )
  }

}
