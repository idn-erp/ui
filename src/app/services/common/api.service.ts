import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private rtr: Router,
    private tst: ToastController,
    private ldr: LoadingController,
    private alt: AlertController
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

  ln: any = {
    dir : "ltr",
    data : {}
  };
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

  post( path: String, data: any, fd: boolean=false ){
    return new Promise(
      Res=>{
        this.http.post(
          `${this.env.api_url}${path}`,
          fd ? data : { data : data },
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
    this.isLoggedIn = false;
    location.reload();
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

  async confirm(
    title: string=(this.ln.confirm || "Confirm"), 
    msg: string=(this.ln.are_you_sure || "Are you sure?"),
    yes: string = (this.ln.yes || "Yes"),
    no: string = (this.ln.no || "No")
  ){
    const alert = await this.alt.create({
      header: title,
      message : msg,
      buttons : [{
        text : no,
        role: 'cancel'
      },{
        text : yes,
        role: 'confirm'
      }]
    })
    alert.present();
    const {role} = await alert.onDidDismiss();
    return role=='confirm';
  }

  download(name: string, url: string){
    let a = document.createElement('a')
    a.download = name
    a.href = url
    a.target = "_blank"
    a.click()
  }

  fix_date( d: string ){
    let a = d.split('/')
    return `${a[2]}-${a[0]}-${a[1]}`
  }

}
