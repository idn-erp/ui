import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { country } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private api: ApiService
  ) { }

  all: country[] = []
  async getall(){
    if(this.all.length==0){
      const res: any = await this.api.sp("country/search", ['', '', ''])
      this.all = res.ok ? res.data : []
    }
    return [...this.all];
  }

  async search(iso: string='', name: string='', code: string=''){
    const res: any = this.api.sp("country/search", [ iso, name, code ])
    return res.ok ? res.data : []
  }

}
