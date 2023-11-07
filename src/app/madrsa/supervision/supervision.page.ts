import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.page.html',
  styleUrls: ['./supervision.page.scss'],
})
export class SupervisionPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  all: any[] = [
    {
        "key": "the_teachers",
        "name": "The Teachers",
        "icon": "people-outline",
        "path": ["/madrsa", "supervision", "the-teachers"]
    },
    {
        "key": "educational_supervisors",
        "name": "Educational Supervisors",
        "icon": "person-outline",
        "path": ["/madrsa", "supervision", "educational-supervisors"]
    }
  ];

  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
