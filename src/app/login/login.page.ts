import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private api: ApiService,
    private rtr: Router
  ) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";
  login(){
    if(!this.email || !this.password)
      this.api.Toast("Invalid email or password");
    else this.api.showLoader("Authenticating...").then(
      ()=>{
        this.api.authenticate(this.email+'@nasban', this.password).then(
          (res:any)=>{
            this.api.hideLoader();
            if(res.ok){
              location.reload();
            }else this.api.Toast("Error: Invalid email or password");
          }
        )
      }
    )
  }
  
}
