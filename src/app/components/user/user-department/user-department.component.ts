import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { UserService } from 'src/app/services/common/user.service';
import { user_department } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-department',
  templateUrl: './user-department.component.html',
  styleUrls: ['./user-department.component.scss'],
})
export class UserDepartmentComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute
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


  add_init(){

  }

}
