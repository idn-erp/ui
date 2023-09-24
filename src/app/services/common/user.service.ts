import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserSelectorComponent } from 'src/app/components/common/user-selector/user-selector.component';
import { user, user_filter } from 'src/app/types/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private mdc: ModalController,
    private api: ApiService
  ) { }

  async search(f: user_filter, in_depth: boolean=false){
    const res: any = await this.api.sp(
      'user/search', 
      [in_depth, f.file || '', f.name || '', f.language || '', f.group_id || 0, f.department_id || 0, f.designation_id || 0, f.shift_id || 0, f.page || 1]
    )
    return res.ok ? res.data : []
  }


  async get( uid: string ){
    const u: any = await this.api.sp('user/get', [uid])
    return u.ok ? u.data[0] : {}
  }

  async get_departments( uid: string ){
    const res: any = await this.api.sp('user/get_departments', [uid])
    return res.ok ? res.data : []
  }
  async get_designations( uid: string ){
    const res: any = await this.api.sp('user/get_designations', [uid])
    return res.ok ? res.data : []
  }
  async get_shifts( uid: string ){
    const res: any = await this.api.sp('user/get_shifts', [uid])
    return res.ok ? res.data : []
  }
  async get_groups( uid: string ){
    const res: any = await this.api.sp('user/get_groups', [uid])
    return res.ok ? res.data : []
  }

  async selector(){
    const modal = await this.mdc.create({
      component : UserSelectorComponent,
      backdropDismiss: false
    });
    modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }

}
