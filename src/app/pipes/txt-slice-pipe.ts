import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtSlice'
})
export class TxtSlicePipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.slice(0, args) + '...' ;
  }

}
