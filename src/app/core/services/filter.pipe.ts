import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstFilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterArgument: any): any {
    if (!items || !filterArgument) {
      return items;
    }
    if (filterArgument.population) {
      return items.filter(
        (item) => item.population > filterArgument.population
      );
    }
    if (filterArgument.area) {
      return items.filter((item) => item.area > filterArgument.area);
    }
    return items;
  }
}
