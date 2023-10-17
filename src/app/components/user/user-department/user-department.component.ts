import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { UserService } from 'src/app/services/common/user.service';
import { department, user_department } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-department',
  templateUrl: './user-department.component.html',
  styleUrls: ['./user-department.component.scss'],
})
export class UserDepartmentComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute,
    private dps: DepartmentService,
    private des: DesignationService
  ) { }

  ln: any = this.api.ln.data
  user_id: string = ""
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{
        this.user_id = p["user_id"]
        this.load()
      }
    )
  }

  all: user_department[] = []
  busy: boolean = false
  async load(){
    if(!this.user_id) return;
    this.all = await this.usr.get_departments(this.user_id)
  }


  async add_init(){
    let {data,role} = await this.dps.selector()
    if(role=='selected'){
      let exists = this.all.filter((x:user_department)=>x.department_id==data.id).length>0
      if(exists){
        this.api.Toast(this.ln.department_already_exist || "Department already exist")
      }else{
        let des = await this.des.selector()
        if(des.role=='selected'){
          await this.api.showLoader(this.ln.saving || "Saving")
          const res: any = await this.usr.add_department( this.user_id, data.id, des.data.id )
          this.api.hideLoader()
          if(res.ok){
            this.api.Toast(this.ln.department_added || "Department added")
            this.all = res.data;
          }else{
            this.api.Toast(this.ln.error_adding_department || "Error adding department")
          }
        }
      }
    }
  }

  async exit(ud: user_department){
    const yes: boolean = await this.api.confirm(
      this.ln.exit_department || 'Exit department?',
      this.ln.exit_user_from_this_department || 'Are you sure you want to exit user from this department?',
      this.ln.exit || 'Exit',
      this.ln.no || 'No'
    )
    if(yes){
      await this.api.showLoader(this.ln.saving || "Saving")
      const res: any = await this.usr.exit_department( this.user_id, ud.id )
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast(this.ln.department_exited || "Department exited")
        this.all = res.data;
      }else{
        this.api.Toast(this.ln.error_exiting_department || "Error exiting department")
      }
    }
  }

  async remove(ud: user_department){
    const yes: boolean = await this.api.confirm(
      this.ln.remove_department || 'Remove department?',
      this.ln.remove_user_from_this_department || 'Are you sure you want to remove user from this department?',
      this.ln.remove || 'Remove',
      this.ln.no || 'No'
    )
    if(yes){
      await this.api.showLoader(this.ln.saving || "Saving")
      const res: any = await this.usr.remove_department( this.user_id, ud.id )
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast(this.ln.department_removed || "Department removed")
        this.all = res.data;
      }else{
        this.api.Toast(this.ln.error_removing_department || "Error removing department")
      }
    }
  }

}
