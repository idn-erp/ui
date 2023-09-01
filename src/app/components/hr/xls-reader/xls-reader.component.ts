import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xls-reader',
  templateUrl: './xls-reader.component.html',
  styleUrls: ['./xls-reader.component.scss'],
})
export class XlsReaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  selectedFile: File | undefined;
  jsonData: any | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = e.target?.result;
        this.processXLSData(data);
      };
      fileReader.readAsArrayBuffer(this.selectedFile);
    }
  }

  processXLSData(data: any) {
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    this.jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log( this.jsonData );
  }

}
