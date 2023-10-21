import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { ProjectService } from 'src/app/services/pm/project.service';
import { project } from 'src/app/types/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
    private api: ApiService,
    private prj: ProjectService
  ) { }
  
  ln: any = this.api.ln.data;

  ngOnInit() {
    this.search();
  }

  all: project[] = [];
  filter: project = {
    code : "",
    name : "",
    type : "all",
    status: "all"
  };
  search(){
    this.prj.search(this.filter).then(
      (res:any)=>{
        this.all = res;
      }
    )
  }

}
