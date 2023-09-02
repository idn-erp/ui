import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { group } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private api: ApiService
  ) { }

  all: group[] = []
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp('group/getall', [])
      this.all = res.ok ? res.data : [];
    }
    return [...this.all]
  }
}
