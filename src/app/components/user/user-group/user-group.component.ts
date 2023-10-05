import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { GroupService } from 'src/app/services/common/group.service';
import { UserService } from 'src/app/services/common/user.service';
import { group, user_group } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
})
export class UserGroupComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute,
    private grp: GroupService
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

  all: user_group[] = []
  busy: boolean = false
  async load(){
    if(!this.user_id) return;
    this.all = await this.usr.get_groups(this.user_id)
  }


  async add_init(){
    const {data,role} = await this.grp.selector()
    if(role=='selected'){
      let exists = this.all.filter((x:user_group)=>x.group_id==data.id).length>0
      if(exists){
        this.api.Toast(this.ln.group_already_exist || "Group already exist")
      }else{
        await this.api.showLoader(this.ln.saving || "Saving")
        const res: any = await this.usr.add_group( this.user_id, data.id )
        this.api.hideLoader()
        if(res.ok){
          this.api.Toast(this.ln.group_added || "Group added")
          this.all = res.data;
        }else{
          this.api.Toast(this.ln.error_adding_group || "Error adding group")
        }
      }
    }
  }

  async remove(ud: user_group){
    const yes: boolean = await this.api.confirm(
      this.ln.remove_group || 'Remove group?',
      this.ln.remove_user_from_this_group || 'Are you sure you want to remove user from this group?',
      this.ln.remove || 'Remove',
      this.ln.no || 'No'
    )
    if(yes){
      await this.api.showLoader(this.ln.updating || "Updating")
      const res: any = await this.usr.remove_group( this.user_id, ud.id )
      this.api.hideLoader()
      if(res.ok){
        this.api.Toast(this.ln.group_removed || "group removed")
        this.all = res.data;
      }else{
        this.api.Toast(this.ln.error_removing_group || "Error removing group")
      }
    }
  }
}
