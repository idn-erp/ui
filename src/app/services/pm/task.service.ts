import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { task } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private api: ApiService
  ) { }

  getall(
    project_id: string
  ){
    return new Promise((Res) => {
      this.api.sp( 'task/getall', [project_id] ).then(
        (res:any)=>{
          Res( res.ok ? res.data : [] );
        }
      )
    })
  }

  getsubtasks(
    task_id: string
  ){
    return new Promise((Res) => {
      this.api.sp( 'task/getsubtasks', [task_id] ).then(
        (res:any)=>{
          Res( res.ok ? res.data : [] );
        }
      )
    })
  }

  create( t: task ){
    return new Promise((Res) => {
      this.api.sp( 'task/create', [t.project_id, t.name, t.type, t.parent, t.pos, t.deadline] ).then(
        (res:any)=>{
          Res( res );
        }
      )
    })
  }

}
