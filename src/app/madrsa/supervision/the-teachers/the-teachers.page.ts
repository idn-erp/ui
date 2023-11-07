import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-the-teachers',
  templateUrl: './the-teachers.page.html',
  styleUrls: ['./the-teachers.page.scss'],
})
export class TheTeachersPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  all: any[] = [
    {
        "key": "teacher_data",
        "name": "Teacher Data",
        "icon": "person-circle-outline",
        "path": ["/supervision", "teacher-data"]
    },
    {
        "key": "methods_for_teachers",
        "name": "Methods for Teachers",
        "icon": "hammer-outline",
        "path": ["/supervision", "methods-for-teachers"]
    }
  ];
  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
