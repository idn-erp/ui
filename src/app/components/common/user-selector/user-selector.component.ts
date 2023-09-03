import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { GroupService } from 'src/app/services/common/group.service';
import { UserService } from 'src/app/services/common/user.service';
import { department, designation, group, user } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent  implements OnInit {

  constructor(
    private mdc: ModalController,
    private api: ApiService,
    private usr: UserService,
    private grp: GroupService,
    private dep: DepartmentService,
    private des: DesignationService
  ) { }

  ln: any = this.api.ln.data
  groups: group[] = []
  designations: designation[] = []
  departments: department[] = []
  ngOnInit() {
    this.load()
  }

  load(){
    this.grp.getall().then(g => this.groups=g)
    this.dep.getall().then(d => this.departments=d)
    this.des.getall().then(d => this.designations=d)
  }

  users: user[] = [];
  filter: user = { group_id : 0, department_id : 0, designation_id : 0 };
  async search(){
    const u: any = await this.usr.search(this.filter)
    this.users = u;
  }

  selected: user = {}
  proceed(){
    this.mdc.dismiss(this.selected)
  }
  close(){
    this.mdc.dismiss()
  }

}
