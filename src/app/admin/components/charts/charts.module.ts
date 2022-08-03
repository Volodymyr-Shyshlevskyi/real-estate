import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartPageComponent } from './chart-page.component';
import { PricesChartComponent } from './chart-page-components/prices-chart/prices-chart.component';
import { VolumeChartComponent } from './chart-page-components/volume-chart/volume-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [
    ChartPageComponent,
    PricesChartComponent,
    VolumeChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class ChartsModule { }
