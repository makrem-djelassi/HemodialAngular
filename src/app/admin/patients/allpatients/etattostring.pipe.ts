import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etattostring'
})
export class EtattostringPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Actif';
      case 1:
        return 'Suspendu';
      case 2:
        return 'Ignore';
      default:
        return '';
    }
  }
}
