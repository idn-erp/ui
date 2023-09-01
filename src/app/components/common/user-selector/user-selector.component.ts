import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent  implements OnInit {

  constructor(
    private mdc: ModalController
  ) { }

  ngOnInit() {}

  select(){
    this.mdc.dismiss("Hello")
  }

}
