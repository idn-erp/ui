import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserSelectorComponent } from 'src/app/components/common/user-selector/user-selector.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private mdc: ModalController
  ) { }

  async selector(){
    const modal = await this.mdc.create({
      component : UserSelectorComponent
    });
    modal.present();
    const {data,role} = await modal.onDidDismiss();
    return {data,role};
  }

}
