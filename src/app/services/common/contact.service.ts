import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { contact } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiService
  ) { }

  async search( ot: string, oi: string ){
    const res: any = await this.api.sp("contact/search", [ot, oi])
    return res.ok ? res.data : [];
  }

  async save( c: contact ){
    const res = await this.api.sp("contact/save", this.get_fields(c))
    return res
  }
  
  async update( c: contact ){
    const res = await this.api.sp("contact/update", [c.id, ...this.get_fields(c)])
    return res
  }

  async remove( c: contact ){
    const res = await this.api.sp("contact/remove", [c.id, c.object_type, c.object_id])
    return res;
  }

  get_fields( c: contact ){
    return [
      c.object_type || '', 
      c.object_id || 0, 
      c.type || '', 
      c.full_name || '', 
      c.country_id || 0, 
      c.state || '',
      c.city || '', 
      c.street || '', 
      c.address || '', 
      c.postal_code || '', 
      c.country_code || '', 
      c.phone || '', 
      c.alternate_phone || '', 
      c.email || '', 
      c.alternate_email || ''
    ]
  }
}
