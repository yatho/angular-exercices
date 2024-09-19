import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 0): string {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }
}
