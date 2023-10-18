import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { shift } from 'src/app/types/interfaces';
import { ModalController } from '@ionic/angular';
import { WorkShiftSelectorComponent } from 'src/app/components/common/work-shift-selector/work-shift-selector.component';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(
    private api: ApiService,
    private mdc: ModalController
  ) { }

  all: shift[] = []
  async get(){
    if(this.all.length > 0) return this.all
    let res: any = await this.api.sp('shift/get', [])
    this.all = res.ok ? res.data : []
    return this.all
  }

  async selector(){
    const modal = await this.mdc.create({
      component : WorkShiftSelectorComponent,
      backdropDismiss: false
    });
    await modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }
}
