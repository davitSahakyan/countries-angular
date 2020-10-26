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

  constructor(private listService: ListService, private router: Router) {
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
}
