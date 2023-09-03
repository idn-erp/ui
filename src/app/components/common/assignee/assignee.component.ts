import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { AssigneeService } from 'src/app/services/common/assignee.service';
import { UserService } from 'src/app/services/common/user.service';
import { assignee } from 'src/app/types/interfaces';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
})
export class AssigneeComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute,
    private asn: AssigneeService
  ) { }

  @Input() object_id_key: string = ""
  @Input() object_type: string = ""
  object_id: string = ""

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{
        this.object_id = p[this.object_id_key]
        this.load();
      }
    )
  }

  all: assignee[] = []
  busy: boolean = false
  load(){
    if(this.object_id){
      this.busy = true
      this.asn.get(this.object_type, this.object_id).then( (r:any) => {
        this.all=r
        this.busy = false
      } )
    }
  }

  add_busy: boolean = false
  async add_init(){
    const {data,role} = await this.usr.selector()
    if(data){
      this.add_busy = true
      const res = await this.asn.add(this.object_type, this.object_id, data.id)
      this.add_busy = false
      if(res.ok){
        this.all = res.data;
        this.api.Toast( this.ln.assigned_successfully || "Assigned Successfully" )
      }else this.api.Toast( this.ln.assigned_failed || "Assigned failed" )
    }
  }

  async remove(
    a: assignee
  ){
    const yes: boolean = await this.api.confirm(
      (this.ln.remove_assignee || "Remove assignee?"),
      (this.ln.remove_assignee_msg || "Do you want to remove this assignee"),
      (this.ln.remove || "Remove")
    );
    if(yes){
      const res = await this.asn.remove(a)
      if(res.ok){
        this.all = res.data;
        this.api.Toast( this.ln.assignee_removed || "Assignee removed")
      }else this.api.Toast( this.ln.error_cannot_remove || "Error: Cannot remove" )
    }
  }

}
