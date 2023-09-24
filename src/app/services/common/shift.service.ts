import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { shift } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(
    private api: ApiService
  ) { }

  all: shift[] = []
  async get(){
    if(this.all.length > 0) return this.all
    let res: any = await this.api.sp('shift/get', [])
    this.all = res.ok ? res.data : []
    return this.all
  }
}
