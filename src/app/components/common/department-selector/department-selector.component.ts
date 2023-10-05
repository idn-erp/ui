import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { DepartmentService } from 'src/app/services/common/department.service';
import { department } from 'src/app/types/interfaces';

@Component({
  selector: 'app-department-selector',
  templateUrl: './department-selector.component.html',
  styleUrls: ['./department-selector.component.scss'],
})
export class DepartmentSelectorComponent  implements OnInit {

  constructor(
    private mdc: ModalController,
    private dps: DepartmentService,
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  all: department[] = []
  ngOnInit() {
    this.load()
  }

  async load(){
    this.all = await this.dps.getall()
  }

  selected: department = {}
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
