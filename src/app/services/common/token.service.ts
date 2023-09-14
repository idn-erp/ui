import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private api: ApiService
  ) { }

  async get( ot: string, ok: string ){
    const res: any = await this.api.sp('token/get',[ot, ok])
    return res.ok ? res.data[0] : false;
  }

}
