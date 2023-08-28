import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ProjectService } from 'src/app/services/project.service';
import { project } from 'src/app/types/interfaces';

@Component({
  selector: 'app-customer-projects',
  templateUrl: './customer-projects.component.html',
  styleUrls: ['./customer-projects.component.scss'],
})
export class CustomerProjectsComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private cst: CustomerService,
    private acr: ActivatedRoute,
    private prj: ProjectService
  ) { }

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(params => {
      this.customer_id = params['customer_id'];
      this.load();
    })
  }

  customer_id: string = "";
  proj: project[] = [];
  load(){
    this.cst.get_projects(this.customer_id).then(
      (res:any)=>{
        this.proj = res;
      }
    )
  }

  is_add_open: boolean = false;
  new_project: project = {};
  add_init(){
    this.new_project.customer_id = this.customer_id;
    this.new_project.type = "supervision";
    this.new_project.code = "";
    this.new_project.name = "";
    this.is_add_open = true;
  }
  add_process(){
    if(!this.new_project.name){
      this.api.Toast("Enter project name");
    }else{
      this.api.showLoader("Creating project...").then(
        ()=>{
          this.prj.create(
            this.new_project
          ).then(
            (res:any)=>{
              this.api.hideLoader();
              if(res.ok){
                this.api.Toast("Project created successfully")
                this.is_add_open = false;
                this.load();
              }else{
                this.api.Toast("Error: Project creation failed");
              }
            }
          )
        }
      );
    }
  }

}
