import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-pm-task-count',
  templateUrl: './pm-task-count.component.html',
  styleUrls: ['./pm-task-count.component.scss'],
})
export class PmTaskCountComponent  implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {}

  today: string = new Date().toISOString().split('T')[0];

}
