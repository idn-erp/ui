import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { UserService } from 'src/app/services/common/user.service';
import { user } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private acr: ActivatedRoute,
    private usr: UserService
  ) { }

  ln:any = this.api.ln.data
  user_id: string = ""
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{
        this.user_id = p["user_id"]
        this.load()
      }
    )
  }

  user: user = {}
  async load(){
    if(!this.user_id) return;
    this.user = await this.usr.get(this.user_id)
  }

}
