import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { UserService } from 'src/app/services/common/user.service';
import { user } from 'src/app/types/interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  constructor(
    private api: ApiService,
  ) { }

  ln:any = this.api.ln.data
  ngOnInit() {
  }

}
