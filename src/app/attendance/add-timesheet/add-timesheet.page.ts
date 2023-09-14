import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/common/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.page.html',
  styleUrls: ['./add-timesheet.page.scss'],
})
export class AddTimesheetPage implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ln: any = this.api.ln.data
  ngOnInit() {
  }

  selected: File
  data: any[] = []
  onFileSelected(event: any) {
    this.selected = event.target.files[0];
    this.readFile();
  }
  readFile() {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(data);
    };
    fileReader.readAsArrayBuffer(this.selected);
  }
}
