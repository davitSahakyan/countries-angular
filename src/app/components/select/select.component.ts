import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Output() fiterArgumentEmmit: EventEmitter<any> = new EventEmitter();

  filterArguments: {} = {};
  isDropdownOpen = false;
  selectFilter: string = 'Select item...';

  arrayOfFilters: any = [
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

  constructor() {}

  ngOnInit() {}

  filter(type, value, messageText): void {
    this.filterArguments = {};
    this.filterArguments[type] = value;
    this.fiterArgumentEmmit.emit(this.filterArguments);
    this.selectFilter = messageText;
    this.isDropdownOpen = false;
  }

  changeSelect() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
