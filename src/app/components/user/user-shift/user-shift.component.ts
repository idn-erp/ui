import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { UserService } from 'src/app/services/common/user.service';
import { user_shift } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-shift',
  templateUrl: './user-shift.component.html',
  styleUrls: ['./user-shift.component.scss'],
})
export class UserShiftComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private acr: ActivatedRoute
  ) { }

  ln: any = this.api.ln.data;
  user_id: string = ""
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{
        this.user_id = p["user_id"]
        this.load()
      }
    )
  }

  all: user_shift[] = []
  async load(){
    this.all = await this.usr.get_shifts(this.user_id);
  }

  add_init(){
    
  }

  remove(s: user_shift){

  }

}
