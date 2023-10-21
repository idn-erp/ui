import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { shift } from 'src/app/types/interfaces';

@Component({
  selector: 'app-work-shift-selector',
  templateUrl: './work-shift-selector.component.html',
  styleUrls: ['./work-shift-selector.component.scss'],
})
export class WorkShiftSelectorComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private shf: ShiftService,
    private mdc: ModalController
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.load()
  }

  all: shift[] = []
  selected: shift = {}
  async load(){
    this.all = await this.shf.get()
  }

  proceed(){
    this.mdc.dismiss(this.selected, 'selected');
  }

  close(){
    this.mdc.dismiss({}, 'cancel');
  }

}
