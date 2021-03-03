import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndCurrency'
})
export class VndCurrencyPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value || 0;
    return super.transform(value, 'VND').replace(/,/g, '.');
  }
}
