import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { TaskService } from 'src/app/services/pm/task.service';
import { task } from 'src/app/types/interfaces';

@Component({
  selector: 'app-task-basic',
  templateUrl: './task-basic.component.html',
  styleUrls: ['./task-basic.component.scss'],
})
export class TaskBasicComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private tsk: TaskService,
    private acr: ActivatedRoute
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      pr=>{
        this.task_id = pr["task_id"]
        this.load()
      }
    )
  }

  task_id: string = ""
  task: task = {}
  load(){
    this.tsk.get(this.task_id).then( (t:any)=>{ this.task = t })
  }



}
