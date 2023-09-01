import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { task } from 'src/app/types/interfaces';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent  implements OnInit {

  constructor(
    private api: ApiService
  ) { }
  
  @Input() tsk: task = {};
  ln:any = this.api.ln.data;
  ngOnInit() {}

}
