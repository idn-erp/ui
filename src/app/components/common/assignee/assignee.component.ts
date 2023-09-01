import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { UserService } from 'src/app/services/common/user.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
})
export class AssigneeComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private usr: UserService
  ) { }

  ln: any = this.api.ln.data;

  ngOnInit() {}

  async add_init(){
    const {data,role} = await this.usr.selector()
    console.log( data );
  }

}
