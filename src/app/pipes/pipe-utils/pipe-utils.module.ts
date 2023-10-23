import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectToTimePipe } from './object-to-time.pipe';



@NgModule({
  declarations: [
    ObjectToTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ObjectToTimePipe
  ]
})
export class PipeUtilsModule { }
