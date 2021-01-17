import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polPipe'
})
export class PolPipe implements PipeTransform {
    transform(value: number, enumType: any): any {
        // console.log("value: " + value + " pol: " + enumType);
        return enumType[value].split(/(?=[A-Z])/).join().replace(",", " ");
    }
}