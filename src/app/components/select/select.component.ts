import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() selectItems: any[];
  @Input() defaultSelectedItem: string;
  @Output() selectedItemEmmit: EventEmitter<any> = new EventEmitter();

  filterArguments: {} = {};
  isDropdownOpen = false;

  constructor() {}

  ngOnInit() {}

  changeSelect() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelect(selectedItem) {
    this.selectedItemEmmit.emit(selectedItem);
    this.defaultSelectedItem = selectedItem.messageText;
    this.isDropdownOpen = false;
  }
}
