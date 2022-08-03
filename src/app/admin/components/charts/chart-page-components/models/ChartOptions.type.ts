import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexLegend, ApexYAxis, ApexTitleSubtitle, ApexStroke, ApexPlotOptions, ApexTooltip, ApexDataLabels } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    yaxis: ApexYAxis | ApexYAxis[];
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    colors: string[];
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
  };