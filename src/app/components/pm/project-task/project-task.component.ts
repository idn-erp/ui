import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { TaskService } from 'src/app/services/pm/task.service';
import { task } from 'src/app/types/interfaces';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss'],
})
export class ProjectTaskComponent  implements OnInit {

  constructor(
    private tsk: TaskService,
    private api: ApiService,
    private acr: ActivatedRoute
  ) { }

  ln = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      pr=>{
        this.project_id = pr["project_id"];
        this.load();
      }
    )
  }

  busy: boolean = false;
  project_id: string = "";
  tasks: task[] = [];
  load(){
    this.tsk.getall(this.project_id).then(
      (res:any)=>{
        this.tasks = res;
      }
    )
  }

  is_add_open: boolean = false;
  new_task: task = {}
  parent: task = {}
  add_init(pr: task = {}){
    this.parent = pr
    this.new_task = {
      project_id: this.project_id,
      type: "task",
      name: "",
      parent: pr.id || 0
    }
    this.is_add_open = true;
  }
  add_process(){
    if(!this.new_task.name) this.api.Toast("Enter task name")
    else{
      this.api.showLoader("Adding task")
      this.tsk.create(this.new_task).then(
        (res:any)=>{
          this.api.hideLoader()
          if(res.ok){
            this.is_add_open = false;
            if(this.parent.id) this.parent.kids?.push(res.data[0])
            else this.tasks.push(res.data[0])
            this.api.Toast("Task added")
          }else this.api.Toast("Error: unable to add task")
        }
      )
    }
  }

}
