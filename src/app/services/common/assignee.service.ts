import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AssigneeService {

  constructor(
    private api: ApiService
  ) { }

  async get(
    object_type: string,
    object_id: string
  ){
    const res: any = await this.api.sp('assignee/get', [object_type, object_id]);
    return res.ok ? res.data : [];
  }

  async add(
    object_type: string,
    object_id: string
  ){
    const res: any = await this.api.sp('assignee/add', [object_type, object_id]);
    return res;
  }

  async remove(
    object_type: string,
    object_id: string
  ){
    const res: any = await this.api.sp('assignee/remove', [object_type, object_id]);
    return res;
  }

}
