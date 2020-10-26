import { Country } from './../../core/model/country-info-model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  id: string;
  countryInfo: Country;

  constructor(
    private listService: ListService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.listService.getSingleCountry(this.id).subscribe((res) => {
      this.countryInfo = res;
      console.log(res);
    });
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
