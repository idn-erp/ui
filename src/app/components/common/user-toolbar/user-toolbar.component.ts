import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { user } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent  implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  us: user = this.api.user
  ngOnInit() {
    console.log( this.us )
  }

  logout(){
    this.api.logout()
  }

}
