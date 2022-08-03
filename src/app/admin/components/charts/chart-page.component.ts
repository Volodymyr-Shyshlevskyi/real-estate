import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {DataService} from './services/date.service'
import { Cities } from './chart-page-components/models/Cities.type';
import { iDataChunk } from './chart-page-components/models/i-dataChunk';


@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit, OnDestroy {
  
  title = 'Title';
  dataIsLoaded = false;
  onDestroy$ = new Subject();
  data: iDataChunk[] = [];
  currentCity = Cities.Kyiv as any;
  items = Object.values(Cities);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchData(this.items[0]);
  }

  fetchData(city: Cities) {
    this.dataIsLoaded = false;
    this.dataService.getData(city).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      (data: iDataChunk[]) => {
        this.data = data;
        this.dataIsLoaded = true;
      });
  }

  onCityChange(newCity: Cities) {
    this.fetchData(newCity);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }
}