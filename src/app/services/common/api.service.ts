import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  env: any = environment;

  user: any = {};
  token: string = "";
  isLoggedIn: boolean = false;
  init(){
    this.user = {};
    this.token = "";
    this.isLoggedIn = false;
    if(localStorage.getItem("token") && localStorage.getItem("user")){
      this.user = localStorage.getItem("user");
      this.token = localStorage.getItem("token") as string;
      this.isLoggedIn = true;
    }
  }

  sp(
    name: String,
    data: any
  ){
    this.http.post(
      `${this.env.api_url}sp/${name}`,
      {
        data : data
      }
    )
  }

  post(){
    return new Promise(
      Res=>{
        //Continue
      }
    );
  }

}
