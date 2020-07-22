import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace',
})
export class RemoveSpacePipe implements PipeTransform {
  transform(input: string, target: string): unknown {
    return input.replace(/\s+/g, target);
  }
}
