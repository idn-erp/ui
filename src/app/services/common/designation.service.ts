import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { designation } from 'src/app/types/interfaces';
import { DesignationSelectorComponent } from 'src/app/components/common/designation-selector/designation-selector.component';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(
    private api: ApiService,
    private mdc: ModalController
  ) { }

  all: designation[] = []
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('designation/getall', [])
      this.all = res.ok ? res.data : []
    }
    return [...this.all]
  }
  


  async selector(){
    const modal = await this.mdc.create({
      component : DesignationSelectorComponent,
      backdropDismiss: false
    });
    await modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }

}
