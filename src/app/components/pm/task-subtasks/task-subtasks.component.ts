import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { TaskService } from 'src/app/services/pm/task.service';
import { task } from 'src/app/types/interfaces';

@Component({
  selector: 'app-task-subtasks',
  templateUrl: './task-subtasks.component.html',
  styleUrls: ['./task-subtasks.component.scss'],
})
export class TaskSubtasksComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private tsk: TaskService,
    private acr: ActivatedRoute
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{ this.task_id = p["task_id"]; this.load() }
    )
  }

  task_id: string = ""
  subtasks: task[] = []
  busy: boolean = false
  load(){
    this.busy = true
    this.tsk.getsubtasks(this.task_id).then(
      (t:any)=>{
        this.busy = false
        this.subtasks = t
      }
    )
  }

  new_task: task = {
    type : 'subtask',
    name : ""
  }
  is_add_open: boolean = false
  add_init(){
    this.new_task = {
      type : 'subtask',
      name : "",
      parent : this.task_id
    }
    this.is_add_open = true
  }
  async add_process(){
    if(!this.new_task.name) this.api.Toast("enter subtask name")
    else{
      await this.api.showLoader("Creating subtask...")
      const res: any = await this.tsk.create(this.new_task)
      this.api.hideLoader()
      if(res.ok){
        this.is_add_open = false
        this.subtasks.push(res.data[0])
        this.api.Toast("Subtask created successfully")
      }else{
        this.api.Toast("Error creating subtask")
      }
    }
  }


}
