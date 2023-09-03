import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserSelectorComponent } from 'src/app/components/common/user-selector/user-selector.component';
import { user } from 'src/app/types/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private mdc: ModalController,
    private api: ApiService
  ) { }

  async search(f: user){
    const res: any = await this.api.sp('user/search', [f.code || '', f.name || '', f.language || '', f.group_id || 0, f.department_id || 0, f.designation_id || 0])
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
