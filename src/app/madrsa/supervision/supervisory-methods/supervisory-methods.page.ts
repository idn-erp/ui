import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-supervisory-methods',
  templateUrl: './supervisory-methods.page.html',
  styleUrls: ['./supervisory-methods.page.scss'],
})
export class SupervisoryMethodsPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  all: any[] = [
    {
        "key": "class_visits",
        "name": "Class Visits",
        "icon": "school-outline",
        "path": ["/learning", "class-visits"]
    },
    {
        "key": "exchange_of_visits",
        "name": "Exchange of Visits",
        "icon": "sync-outline",
        "path": ["/learning", "exchange-of-visits"]
    },
    {
        "key": "training_courses",
        "name": "Training Courses",
        "icon": "book-outline",
        "path": ["/learning", "training-courses"]
    },
    {
        "key": "practical_lessons",
        "name": "Practical Lessons",
        "icon": "flask-outline",
        "path": ["/learning", "practical-lessons"]
    },
    {
        "key": "workshops",
        "name": "Workshops",
        "icon": "construct-outline",
        "path": ["/learning", "workshops"]
    },
    {
        "key": "guided_decision",
        "name": "Guided Decision",
        "icon": "business-outline",
        "path": ["/learning", "guided-decision"]
    }
  ];
  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
