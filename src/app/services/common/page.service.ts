import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private api: ApiService
  ) { }

  async get(m: string){
    const res: any = await this.api.sp('page/get', [m])
    return res.ok ? res.data : []
  }

}
