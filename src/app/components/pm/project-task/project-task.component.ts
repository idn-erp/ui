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
      type: pr.id ? "task" : "group",
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
            if(this.parent.id){
              this.parent.kids = this.parent.kids? this.parent.kids : [];
              this.parent.kids.push(res.data[0])
            }
            else this.tasks.push(res.data[0])
            this.api.Toast("Task added")
          }else this.api.Toast("Error: unable to add task")
        }
      )
    }
  }

  async remove( t: task ){
    let ids: string[] = [ t.id as string ];
    if(t.type=='group'){
      let kids: string[] = t.kids ? t.kids.map(x=>{return x.id as string;}) : []
      ids.push( ...kids )
    }
    const ans = await this.api.confirm(
      'Delete ' + t.type,
      t.type=='group' ? 'This will also remove all the tasks in this group' : 'Do you want to delete this task?',
      'delete',
      'no'
    )
    if(ans){
      await this.api.showLoader("removing tasks")
      const res: any = await this.tsk.remove(ids)
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast("Task deleted successfully")
        this.load();
      }
    }
  }

  is_edit_open: boolean = false
  edit_task: task = {}
  edit_init(t: task){
    this.edit_task = {...t}
    this.is_edit_open = true
  }
  async edit_process(){
    if(!this.edit_task.name) this.api.Toast("Enter task name");
    else{
      await this.api.showLoader("Updating task...")
      const res:any = await this.tsk.update(this.edit_task)
      this.api.hideLoader()
      if(res.ok){
        this.is_edit_open = false;
        this.api.Toast("Task updated successfully")
        this.load()
      }else this.api.Toast("Error updating task")
    }
  }

}
