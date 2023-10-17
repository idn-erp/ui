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

  async save( u: user ){
    const res: any = await this.api.sp(
      "user/save", 
      [
        u.file, u.name, u.email, u.password, u.language, u.can_login, 
        JSON.stringify(u.dep_ids), JSON.stringify(u.grp_ids), JSON.stringify(u.des_ids), JSON.stringify(u.shf_ids) 
      ]
    )
    return res
  }

  async get_departments( uid: string ){
    const res: any = await this.api.sp('user/get_departments', [uid])
    return res.ok ? res.data : []
  }
  async add_department( uid: string, dep_id: string, des_id: string ){
    const res: any = await this.api.sp("user/add_department", [uid, dep_id, des_id])
    return res;
  }
  async exit_department( uid: string, user_dep_id: string ){
    const res: any = await this.api.sp("user/exit_department", [ uid, user_dep_id ])
    return res;
  }
  async remove_department( uid: string, user_dep_id: string ){
    const res: any = await this.api.sp("user/remove_department", [ uid, user_dep_id ])
    return res;
  }

  async get_designations( uid: string ){
    const res: any = await this.api.sp('user/get_designations', [uid])
    return res.ok ? res.data : []
  }
  async add_designation(uid: string, desig_id: string) {
    const res: any = await this.api.sp("user/add_designation", [uid, desig_id]);
    return res;
  }
  async exit_designation(uid: string, user_desig_id: string) {
    const res: any = await this.api.sp("user/exit_designation", [uid, user_desig_id]);
    return res;
  }
  async remove_designation(uid: string, user_desig_id: string) {
    const res: any = await this.api.sp("user/remove_designation", [uid, user_desig_id]);
    return res;
  }
  
  async get_shifts( uid: string ){
    const res: any = await this.api.sp('user/get_shifts', [uid])
    return res.ok ? res.data : []
  }
  async add_shift(uid: string, shift_id: string) {
    const res: any = await this.api.sp("user/add_shift", [uid, shift_id]);
    return res;
  }
  async exit_shift(uid: string, user_shift_id: string) {
    const res: any = await this.api.sp("user/exit_shift", [uid, user_shift_id]);
    return res;
  }
  async remove_shift(uid: string, user_shift_id: string) {
    const res: any = await this.api.sp("user/remove_shift", [uid, user_shift_id]);
    return res;
  }

  async get_groups( uid: string ){
    const res: any = await this.api.sp('user/get_groups', [uid])
    return res.ok ? res.data : []
  }
  async add_group(uid: string, group_id: string) {
    const res: any = await this.api.sp("user/add_group", [uid, group_id]);
    return res;
  }
  async exit_group(uid: string, user_group_id: string) {
    const res: any = await this.api.sp("user/exit_group", [uid, user_group_id]);
    return res;
  }  
  async remove_group(uid: string, user_group_id: string) {
    const res: any = await this.api.sp("user/remove_group", [uid, user_group_id]);
    return res;
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
