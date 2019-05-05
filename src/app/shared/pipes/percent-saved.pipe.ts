import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentSaved'
})
export class PercentSavedPipe implements PipeTransform {

  transform(price: number, list_price: number): number {
    return 100 - (100 * price / list_price);
  }

}
