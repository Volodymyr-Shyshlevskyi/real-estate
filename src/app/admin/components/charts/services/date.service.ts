import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDataChunk } from '../chart-page-components/models/i-dataChunk';
import { Cities } from '../chart-page-components/models/Cities.type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
  }

  getData(city: Cities): Observable<iDataChunk[]> {
    return this.http.get<iDataChunk[]>(`assets/cities-data/${city}.json`);
  }
}