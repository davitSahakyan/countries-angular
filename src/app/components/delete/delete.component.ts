import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  @Input() selectedCountry;

  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.deleteItem.emit(this.selectedCountry);
  }
}
