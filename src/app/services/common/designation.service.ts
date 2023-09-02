import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { designation } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(
    private api: ApiService
  ) { }

  all: designation[] = []
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('designation/getall', [])
      this.all = res.ok ? res.data : []
    }
    return [...this.all]
  }

}
