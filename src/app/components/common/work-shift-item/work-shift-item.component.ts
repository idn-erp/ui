import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { user_shift } from 'src/app/types/interfaces';

@Component({
  selector: 'app-work-shift-item',
  templateUrl: './work-shift-item.component.html',
  styleUrls: ['./work-shift-item.component.scss'],
})
export class WorkShiftItemComponent  implements OnInit {

  @Input() item: user_shift = {}

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {}

}
