import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { DesignationService } from 'src/app/services/common/designation.service';
import { designation } from 'src/app/types/interfaces';

@Component({
  selector: 'app-designation-selector',
  templateUrl: './designation-selector.component.html',
  styleUrls: ['./designation-selector.component.scss'],
})
export class DesignationSelectorComponent  implements OnInit {

  constructor(
    private mdc: ModalController,
    private des: DesignationService,
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  all: designation[] = []
  ngOnInit() {
    this.load()
  }

  async load(){
    this.all = await this.des.getall()
  }

  selected: designation = {}
  proceed(){
    if(!this.selected.id){
      this.api.Toast(this.ln.select_department || "Select a department");
      return
    }else{
      this.mdc.dismiss(this.selected,'selected');
    }
  }

  close(){
    this.mdc.dismiss({}, 'cancel')
  }


}
