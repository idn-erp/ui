import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { GroupService } from 'src/app/services/common/group.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { UserService } from 'src/app/services/common/user.service';
import { department, designation, group, shift, user, user_filter } from 'src/app/types/interfaces';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor(
    private api: ApiService,
    private grp: GroupService,
    private dep: DepartmentService,
    private des: DesignationService,
    private shf: ShiftService,
    private usr: UserService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
    this.load_filters()
  }

  
  filter: user_filter = {
    file : '',
    name : '',
    group_id : 0,
    department_id : 0,
    designation_id : 0,
    shift_id : 0,
    page : 1
  }
  groups: group[] = []
  deps: department[] = []
  desg: designation[] = []
  shifts: shift[] = []
  async load_filters(){
    this.groups = await this.grp.getall()
    this.deps = await this.dep.getall()
    this.desg = await this.des.getall()
    this.shifts = await this.shf.get()
  }

  all: user[] = []
  async search(){
    this.all = await this.usr.search(this.filter)
    if(this.all.length==0){
      this.api.Toast(this.ln.no_user_found || "No user found")
      this.prev()
    }
  }
  next(){
    this.filter.page += 1
    this.search()
  }
  prev(){
    if(this.filter.page>1){
      this.filter.page -= 1
      this.search()
    }
  }

}
