import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  all: any[] = [
    {
      "key": "head_teacher",
      "name": "Head Teacher",
      "icon": "school-outline",
      "path": ["/learning", "head-teacher"]
    },
    {
      "key": "school_affair_agent",
      "name": "School Affair Agent",
      "icon": "people-outline",
      "path": ["/learning", "school-affair-agent"]
    },
    {
      "key": "student_affair_agent",
      "name": "Student Affair Agent",
      "icon": "person-add-outline",
      "path": ["/learning", "student-affair-agent"]
    },
    {
      "key": "student_mentor",
      "name": "Student Mentor",
      "icon": "person-add-outline",
      "path": ["/learning", "student-mentor"]
    },
    {
      "key": "leader_of_student_activity",
      "name": "Leader of Student Activity",
      "icon": "people-outline",
      "path": ["/learning", "leader-of-student-activity"]
    },
    {
      "key": "students",
      "name": "Students",
      "icon": "people-outline",
      "path": ["/learning", "students"]
    },
    {
      "key": "guardians",
      "name": "Guardians",
      "icon": "people-outline",
      "path": ["/learning", "guardians"]
    }
  ];
  
  ln: any = this.api.ln.data;
  ngOnInit() {
  }

}
