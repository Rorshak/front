import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultSales = [];
    for (const sale of value) {
      if (sale.dateSell.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSales.push(sale);
      };
    };
    return resultSales;
}

}
