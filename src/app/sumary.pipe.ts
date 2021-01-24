import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumary',
})
export class SumaryPipe implements PipeTransform {
  transform(value: string, limit: number, ...args: unknown[]): unknown {
    // value là giá trị đầu vào tại vị trí đặt pipes
    // args là tham số của pipes kiểu rest
    console.log(limit);
    limit = limit || 50;

    return value.substr(0, limit) + '...';
  }
}
