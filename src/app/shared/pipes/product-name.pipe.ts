import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length > 50){
      const newString = value.substring(0, 50)+"..."
      return newString;
    }
    return value;
  }

}
