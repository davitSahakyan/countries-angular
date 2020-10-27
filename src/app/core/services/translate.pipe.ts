import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.sevice';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: string) {
    return this.translateService.translate(value);
  }
}
