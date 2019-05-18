import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatCityState'
})
export class ConcatCityStatePipe implements PipeTransform {

  transform(cityStateObj:{city, state}): string {
    if(cityStateObj.city) {
      return cityStateObj.city.concat(", ").concat(cityStateObj.state);
    }
    return null;
  }

}
