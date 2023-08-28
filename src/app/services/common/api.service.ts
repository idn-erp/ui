import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private rtr: Router,
    private tst: ToastController,
    private ldr: LoadingController
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
    this.init_ln(this.user.language || 'en');
  }

  ln : any = {};
  init_ln(ln_code: string){
    this.http.get('/assets/languages/'+ln_code+'.json').subscribe(
      (res:any)=>{
        document.body.setAttribute('dir', res.dir || 'ltr')
        this.ln = res
      }
    )
  }

  sp( name: String, data: any ){
    return new Promise(
      Res=>{
        this.http.post(
          `${this.env.api_url}sp/${name}`,
          { data : data },
          { headers : { Authorization: this.token } }
        ).subscribe(
          (res:any)=>{
            if(!res.ok && res.type=='LOGIN'){
              console.log( "Logging out" );
              this.logout();
            }
            Res(res);
          }
        )
      }
    );
  }

  post( path: String, data: any ){
    return new Promise(
      Res=>{
        this.http.post(
          `${this.env.api_url}${path}`,
          { data : data },
          { headers : { Authorization: this.token } }
        ).subscribe( res => Res(res) )
      }
    );
  }

  authenticate( email: String, password: String ){
    return new Promise(
      Res=>{
        this.post( 'authenticate', {email,password} ).then( (res:any) => {
          if(res.ok){
            this.token = res.data.authToken;
            this.user = res.data.user;
            localStorage.setItem('user', this.user);
            localStorage.setItem('token', this.token);
          }
          Res(res);
        })
      }
    );
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.rtr.navigate(['/login']);
  }

  async Toast( msg: string, position: 'top' | 'middle' | 'bottom' = 'bottom' ){
    const toast = await this.tst.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
  async showLoader( msg: string ) {
    const loading = await this.ldr.create({
      message: msg
    });
    return loading.present();
  }
  hideLoader(){
    this.ldr.dismiss();
  }

}