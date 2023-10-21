import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import { ShiftService } from 'src/app/services/common/shift.service';
import { TimesheetService } from 'src/app/services/common/timesheet.service';
import { shift, timesheet } from 'src/app/types/interfaces';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.page.html',
  styleUrls: ['./add-timesheet.page.scss'],
})
export class AddTimesheetPage implements OnInit {

  constructor(
    private api: ApiService,
    private tms: TimesheetService,
    private shf: ShiftService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
    this.load_shifts()
  }

  shifts: shift[] = []
  selected_shift_code: string = "";
  async load_shifts(){
    this.shifts = await this.shf.get()
    this.selected_shift_code = this.shifts[0].code
  }

  date: string = new Date().toISOString().split('T')[0]
  selected: File
  users: timesheet[] = []
  onFileSelected(event: any) {
    this.selected = event.target.files[0]
    this.readFile()
    event.target.value = null
  }
  readFile() {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      rows.splice(0, 1)
      this.users = rows.map((x:any)=>{
        return {
          date : this.api.fix_date(x[3]),
          file : x[0],
          in_time : x[4] ? {
            h: parseInt(x[4].split(':')[0]), 
            m: parseInt(x[4].split(':')[1])
          } : null,
          out_time : x[5] ? {
            h: parseInt(x[5].split(':')[0]), 
            m: parseInt(x[5].split(':')[1])
          } : null
        }
      })
      let files = rows.map((x:any)=>{return x[0].toString()})
      this.load_user_shift(files)
    };
    fileReader.readAsArrayBuffer(this.selected);
  }

  async load_user_shift( files: string[] ){
    let codes: any = await this.tms.get_shift_code(files)
    let codes_ob: any = {}
    codes.forEach((x:any)=>{
      codes_ob[x.file] = x
    })
    this.users.forEach(
      (x:timesheet)=>{
        if(codes_ob[x.file]){
          x.shifts = this.shifts.filter((s:shift)=>{ return codes_ob[x.file].shift_code.indexOf(s.code)>=0; })
          x.name = codes_ob[x.file].name
          x.user_id = codes_ob[x.file].id
          // Get global selected shift
          let selected_shift: shift[] = x.shifts.filter((x:shift)=>{ return x.code==this.selected_shift_code; })
          if(selected_shift.length>0){
            // If the user has the selected shift code
            x.shift = selected_shift[0]
          }else{
            // In case user does not have the selected shift code 
            // Select the first one
            x.shift = x.shifts[0]
          }
          x = this.parse_user_shift(x)
        }
      }
    )
  }

  parse_user_shift(u: timesheet): timesheet{
    // in_time
    if(u.in_time){
      let is_in_delay = u.in_time.h>u.shift.in_delay.h || (u.in_time.h==u.shift.in_delay.h && u.in_time.m>u.shift.in_delay.m)
      u.is_in_delay = is_in_delay ? 'yes' : 'no'
    }else{
      u.is_absent = 'yes'
    }
    if(u.out_time){
      let is_out_early = u.out_time.h<u.shift.out_early.h || (u.out_time.h==u.shift.out_early.h && u.out_time.m<u.shift.out_early.m)
      u.is_out_early = is_out_early ? 'yes' : 'no'
    }
    return u;
  }

  reset(){
    this.selected = null
    this.users = []
  }
  async save(){
    // get available users
    let users: timesheet[] = this.users.filter((x:timesheet)=>{
      return (x.user_id && x.shift)
    })
    users = users.map((x:timesheet)=>{
      return {
        user_id: x.user_id,
        file : x.file,
        name : x.name,
        date : this.date,
        in_time : x.in_time,
        is_in_delay : x.is_in_delay || "none",
        out_time : x.out_time,
        is_out_early : x.is_out_early || "none",
        is_absent : x.is_absent || "none",
        shift_id : x.shift.id
      }
    })
    await this.api.showLoader("Saving...")
    const ok: boolean = await this.tms.save(users)
    this.api.hideLoader()
    if(ok){
      this.api.Toast( this.ln.timesheet_saved || "Timesheet saved" )
      this.reset()
    }else{
      this.api.Toast( this.ln.error_try_again || "Error, try again" )
    }
  }
}
