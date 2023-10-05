import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { GroupService } from 'src/app/services/common/group.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { UserService } from 'src/app/services/common/user.service';
import { department, designation, group, shift, user } from 'src/app/types/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private dps: DepartmentService,
    private dss: DesignationService,
    private grp: GroupService,
    private shf: ShiftService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.load()
  }

  departments: department[] = []
  designations: designation[] = []
  groups: group[] = []
  shifts: shift[] = []
  async load(){
    this.departments = await this.dps.getall()
    this.designations = await this.dss.getall()
    this.groups = await this.grp.getall()
    this.shifts = await this.shf.get()
  }
  
  new_user: user = {
    file: '',
    name: '',
    email: '',
    language: 'en',
    can_login: false
  }
  async save(){
    if(!this.new_user.file || !this.new_user.name){
      this.api.Toast(this.ln.fill_all_fields || 'Please fill all fields')
      return
    }
    await this.api.showLoader(this.ln.saving || 'Saving...')
    const res: any = await this.usr.save( this.new_user )
    this.api.hideLoader()
    if(res.ok){
      if(res.data[0].id){
        this.new_user = {
          file: '',
          name: '',
          email: '',
          language: 'en',
          can_login: false,
          dep_ids : [],
          des_ids : [],
          grp_ids : [],
          shf_ids : []
        }
        this.api.Toast(this.ln.user_saved || 'User Saved')
      }else{
        this.api.Toast(this.ln.unable_to_create_user || 'Unable to create user')
      }
    }
  }



}
