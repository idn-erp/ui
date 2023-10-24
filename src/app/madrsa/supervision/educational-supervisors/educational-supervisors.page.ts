import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-educational-supervisors',
  templateUrl: './educational-supervisors.page.html',
  styleUrls: ['./educational-supervisors.page.scss'],
})
export class EducationalSupervisorsPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  all: any[] = [
    {
        "key": "supervisory_methods",
        "name": "Supervisory Methods",
        "icon": "options-outline",
        "path": ["/madrsa", "supervision", "supervisory-methods"]
    }
  ];
  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
