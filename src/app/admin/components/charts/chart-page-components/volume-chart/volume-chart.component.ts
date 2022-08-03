import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from '../models/ChartOptions.type';
import { iDataChunk } from '../models/i-dataChunk';

@Component({
  selector: 'app-volume-chart',
  templateUrl: './volume-chart.component.html',
  styleUrls: ['./volume-chart.component.scss']
})
export class VolumeChartComponent implements OnInit {

  @Input() data: iDataChunk[];
  volumeCharOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.composeChartOptions();
  }

  composeChartOptions() {
    this.volumeCharOptions = {
      title: {
        text: 'Volume',
        style: {
          color: '#FFFFFF'
        }
      },
      series: [
        {
          name: 'SeriesName',
          data: this.data.map(el => el.volume)
        }
        ],
      chart: {
        height: 350,
        type: 'bar',
      },
      colors: ['#FFA500'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      legend: {
        show: false
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#FFFFFF'],
            fontSize: '12px'
          }
        }
      },
      xaxis: {
        categories: this.data.map(el => el.date),
        labels: {
          style: {
            colors: '#FFFFFF',
            fontSize: '12px'
          }
        }
      }
    };
  }

}