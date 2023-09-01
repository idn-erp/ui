import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
