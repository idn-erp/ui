import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { timesheet, timesheet_filter } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(
    private api: ApiService
  ) { }

  async get_shift_code( files: string[] ){
    const res: any = await this.api.sp('user/get_shift_code', [ JSON.stringify(files) ])
    return res.ok ? res.data : []
  }

  async save( users: timesheet[] ){
    const res: any = await this.api.sp("timesheet/save", [JSON.stringify(users)])
    return res.ok;
  }

  async search( f: timesheet_filter ){
    const res: any = await this.api.sp("timesheet/search", [
      f.type, f.date, f.date_from, f.date_to, f.department_id, f.file,
      f.name, f.shift_id, f.is_in_delay, f.is_out_early, f.is_absent
    ]);
    return res.ok ? res.data : [];
  }
}
