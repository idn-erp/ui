import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { ProjectService } from 'src/app/services/pm/project.service';
import { project } from 'src/app/types/interfaces';

@Component({
  selector: 'app-project-basic',
  templateUrl: './project-basic.component.html',
  styleUrls: ['./project-basic.component.scss'],
})
export class ProjectBasicComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private acr: ActivatedRoute,
    private prj: ProjectService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      params=>{
        this.project_id = params["project_id"];
        this.load();
      }
    )
  }

  project_id: string = "";
  busy: boolean = false;
  proj: project = {};
  load(){
    this.busy = true;
    this.prj.get(this.project_id).then(
      (res:any)=>{
        this.busy = false;
        this.proj = res;
      }
    )
  }

}
