import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { department } from 'src/app/types/interfaces';
import { ModalController } from '@ionic/angular';
import { DepartmentSelectorComponent } from 'src/app/components/common/department-selector/department-selector.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private api: ApiService,
    private mdc: ModalController
  ) { }

  all: department[] = [];
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('department/getall', [])
      this.all = res.ok ? res.data : [];
    }
    return [...this.all];
  }


  async selector(){
    const modal = await this.mdc.create({
      component : DepartmentSelectorComponent,
      backdropDismiss: false
    });
    await modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }

}
