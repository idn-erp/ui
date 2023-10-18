import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { UserService } from 'src/app/services/common/user.service';
import { shift, user_shift } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-shift',
  templateUrl: './user-shift.component.html',
  styleUrls: ['./user-shift.component.scss'],
})
export class UserShiftComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService,
    private shf: ShiftService,
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

  async add_init(){
    let s = await this.shf.selector();
    if(s.role=='selected'){
      if( this.all.filter(x=>x.shift_id==s.data.id).length>=1 )
        this.api.Toast("Shift already alloted")
      else{
        await this.api.showLoader(this.ln.updating || "Updating")
        let res = await this.usr.add_shift(this.user_id, s.data.id)
        this.api.hideLoader()
        if(res.ok){
          this.all = res.data
          this.api.Toast(this.ln.shift_alloted_to_user || "Shift alloted to the user")
        }else{
          this.api.Toast(this.ln.error_unable_to_assign_shift || "Error: Unable to assign shift")
        }
      }
    }
  }

  remove(s: user_shift){

  }

}
