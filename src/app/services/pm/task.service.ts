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

  get(
    task_id: string
  ){
    return new Promise((Res) => {
      this.api.sp( 'task/get', [task_id] ).then(
        (res:any)=>{
          res = res.ok ? res.data[0] : {};
          Res( res );
        }
      )
    })
  }

  getall(
    project_id: string
  ){
    return new Promise((Res) => {
      this.api.sp( 'task/getall', [project_id] ).then(
        (res:any)=>{
          res = res.ok ? res.data : [];
          let all: task[] = res.filter((x:task)=>x.parent=='0');
          all.forEach(x=>{
            x.kids = res.filter((y:task)=>y.parent==x.id) || [];
          })
          Res( all );
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
  
  update( t: task ){
    return new Promise((Res) => {
      this.api.sp( 'task/update', [t.id, t.name, t.parent, t.pos, t.deadline] ).then(
        (res:any)=>{
          Res( res );
        }
      )
    })
  }

  remove( ids: string[] ){
    return new Promise((Res) => {
      this.api.sp( 'task/remove', [JSON.stringify(ids)] ).then(
        (res:any)=>{
          Res( res );
        }
      )
    })
  }

}
