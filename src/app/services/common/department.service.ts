import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { department } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private api: ApiService
  ) { }

  all: department[] = [];
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('department/getall', [])
      this.all = res.ok ? res.data : [];
    }
    return [...this.all];
  }

}
