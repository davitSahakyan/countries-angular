import { AppConfig } from './../../config/app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country-info-model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(AppConfig.country.getAll);
  }

  getSingleCountry(code: string): Observable<Country> {
    return this.http.get<Country>(AppConfig.country.getByCode + code);
  }
}
