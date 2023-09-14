import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(
    private api: ApiService
  ) { }

  async get(){
    const res: any = await this.api.sp("module/get", [])
    return res.ok ? res.data : []
  }
}
