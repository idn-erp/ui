import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { UserService } from 'src/app/services/common/user.service';
import { designation, user_designation } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-designation',
  templateUrl: './user-designation.component.html',
  styleUrls: ['./user-designation.component.scss'],
})
export class UserDesignationComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute,
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

  all: user_designation[] = []
  busy: boolean = false
  async load(){
    if(!this.user_id) return;
    this.all = await this.usr.get_designations(this.user_id)
  }


  async add_init(){
    const {data,role} = await this.des.selector()
    if(role=='selected'){
      let exists = this.all.filter((x:designation)=>x.id==data.id).length>0
      if(exists){
        this.api.Toast(this.ln.designation_already_exist || "Designation already exist")
      }else{
        await this.api.showLoader(this.ln.saving || "Saving")
        const res: any = await this.usr.add_designation( this.user_id, data.id )
        this.api.hideLoader()
        if(res.ok){
          this.api.Toast(this.ln.designation_added || "Designation added")
          this.all = res.data;
        }else{
          this.api.Toast(this.ln.error_adding_designation || "Error adding designation")
        }
      }
    }
  }

  async exit(ud: user_designation){
    const yes: boolean = await this.api.confirm(
      this.ln.exit_designation || 'Exit designation?',
      this.ln.exit_user_from_this_designation || 'Are you sure you want to exit user from this designation?',
      this.ln.exit || 'Exit',
      this.ln.no || 'No'
    )
    if(yes){
      await this.api.showLoader(this.ln.saving || "Saving")
      const res: any = await this.usr.exit_designation( this.user_id, ud.id )
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast(this.ln.designation_exited || "Designation exited")
        this.all = res.data;
      }else{
        this.api.Toast(this.ln.error_exiting_designation || "Error exiting designation")
      }
    }
  }

  async remove(ud: user_designation){
    const yes: boolean = await this.api.confirm(
      this.ln.remove_designation || 'Remove designation?',
      this.ln.remove_user_from_this_designation || 'Are you sure you want to remove user from this designation?',
      this.ln.remove || 'Remove',
      this.ln.no || 'No'
    )
    if(yes){
      await this.api.showLoader(this.ln.saving || "Saving")
      const res: any = await this.usr.remove_designation( this.user_id, ud.id )
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast(this.ln.designation_removed || "Designation removed")
        this.all = res.data;
      }else{
        this.api.Toast(this.ln.error_removing_designation || "Error removing designation")
      }
    }
  }
}
