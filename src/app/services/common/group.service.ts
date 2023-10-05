import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { group } from 'src/app/types/interfaces';
import { ModalController } from '@ionic/angular';
import { GroupSelectorComponent } from 'src/app/components/common/group-selector/group-selector.component';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private api: ApiService,
    private mdc: ModalController
  ) { }

  all: group[] = []
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('group/getall', [])
      this.all = res.ok ? res.data : [];
    }
    return [...this.all]
  }

  
  async selector(){
    const modal = await this.mdc.create({
      component : GroupSelectorComponent,
      backdropDismiss: false
    });
    await modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }

}
