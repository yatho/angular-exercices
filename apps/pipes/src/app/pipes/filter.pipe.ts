import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(list: string[], searchText: string): string[] {
    if (!searchText) {
      return list;
    }
    searchText = searchText.toLowerCase();
    return list.filter((item) => item.toLowerCase().includes(searchText));
  }
}
