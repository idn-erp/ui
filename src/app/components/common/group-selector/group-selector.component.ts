import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { GroupService } from 'src/app/services/common/group.service';
import { group } from 'src/app/types/interfaces';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss'],
})
export class GroupSelectorComponent  implements OnInit {

  constructor(
    private mdc: ModalController,
    private grp: GroupService,
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  all: group[] = []
  ngOnInit() {
    this.load()
  }

  async load(){
    this.all = await this.grp.getall()
  }

  selected: group = {}
  proceed(){
    if(!this.selected.id){
      this.api.Toast(this.ln.select_group || "Select a group");
      return
    }else{
      this.mdc.dismiss(this.selected,'selected');
    }
  }

  close(){
    this.mdc.dismiss({}, 'cancel')
  }


}
