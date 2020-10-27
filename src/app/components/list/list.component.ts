import { TranslateService } from './../../core/services/translate.sevice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from './../../core/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data;
  loading: boolean;
  filterArguments: {} = {};
  coolCountries: any[];
  // filter
  selectFilterItems: any[] = [
    {
      type: 'population',
      value: 10000000,
      messageText: 'more than 10.000.000 people',
    },
    {
      type: 'population',
      value: 100000000,
      messageText: 'more than 100.000.000 people',
    },
    { type: 'area', value: 100000, messageText: 'bigger than 100.000 km2' },
  ];
  defaultSelectedFilterItem: string = 'Select item...';
  // filter
  // language
  selectLanguageItems: any[] = [
    {
      value: 'en',
      messageText: 'English',
    },
    {
      value: 'ru',
      messageText: 'Русский',
    },
    { value: 'hy', messageText: 'Հայերեն' },
  ];
  defaultSelectedLanguage: string = 'English';

  constructor(
    private listService: ListService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.listService.getCountries().subscribe((res) => {
      this.loading = false;
      this.data = res;
    });
  }

  handleReadMore(code) {
    this.router.navigate(['/country', { id: code }]);
  }
  addCoolCountry(country) {
    this.coolCountries = [...this.coolCountries, country];
    console.log(this.coolCountries);
  }
  deleteCountry(alpha3Code) {
    this.data = this.data.filter(
      (country) => country.alpha3Code !== alpha3Code.alpha3Code
    );
  }
  filerByChosenArgument(argument) {
    console.log(argument, 'wer');
    this.filterArguments = argument;
  }

  onSelectChange(selectedItem, type) {
    switch (type) {
      case 'filter':
        this.filterArguments = selectedItem;
        break;
      case 'language':
        this.translateService.changeLanguage(selectedItem.value);
        break;
      default:
        break;
    }
  }
}
