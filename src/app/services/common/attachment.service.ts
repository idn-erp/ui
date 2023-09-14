import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { attachment } from 'src/app/types/interfaces';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor(
    private api: ApiService,
    private tkn: TokenService
  ) { }

  env: any = environment

  async get(
    ot: string,
    oi: string
  ){
    const res: any = await this.api.sp('attachment/get',[ot, oi])
    return res.ok ? res.data : []
  }

  async remove(
    a: attachment
  ){
    const res: any = await this.api.sp('attachment/remove', [a.id])
    return res.ok;
  }

  async get_preview(a: attachment){
    const t: any = await this.tkn.get('attachment', a.file_name as string)
    return t._token ? this.env.api_url + `attachment/view/${t._token}` : `/assets/icon/document-attach.png`;
  }


}
