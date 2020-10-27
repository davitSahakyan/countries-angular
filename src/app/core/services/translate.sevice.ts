import { TranslatePipe } from './translate.pipe';
import { Injectable } from '@angular/core';
import * as en from '../../../assets/languages/en.json';
import * as ru from '../../../assets/languages/ru.json';
import * as hy from '../../../assets/languages/hy.json';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public language = 'en';

  public dictionary = {
    en: en.default,
    ru: ru.default,
    hy: hy.default,
  };

  translate(value) {
    return this.dictionary[this.language][value];
  }

  changeLanguage(language) {
    this.language = language;
  }
}
