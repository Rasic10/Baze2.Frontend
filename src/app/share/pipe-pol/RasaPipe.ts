import { Pipe, PipeTransform } from '@angular/core';
import { Rasa } from 'src/app/models/krava';

@Pipe({
  name: 'rasaPipe'
})
export class RasaPipe implements PipeTransform {
    transform(value: Rasa, enumType: any): any {
        return value.naziv + " (" + value.boja + ")";
    }
}