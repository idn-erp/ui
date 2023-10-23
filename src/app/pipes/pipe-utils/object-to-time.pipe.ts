import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToTime'
})
export class ObjectToTimePipe implements PipeTransform {

  transform(timeObject: { h: number, m: number }): string {
    const { h, m } = timeObject;
    let formattedTime = '';

    // Determine AM or PM
    const period = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const hours12 = h > 12 ? h - 12 : h;
    const formattedHours = hours12 < 10 ? `0${hours12}` : hours12;

    // Format the minutes
    const formattedMinutes = m < 10 ? `0${m}` : m;

    formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    return formattedTime;
  }

}
