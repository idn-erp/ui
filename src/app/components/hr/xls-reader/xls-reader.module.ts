import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlsReaderComponent } from './xls-reader.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    XlsReaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    XlsReaderComponent
  ]
})
export class XlsReaderModule { }
