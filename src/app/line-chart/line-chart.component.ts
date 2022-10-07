import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() title: string;
  xdata: Array<number>;
  ydata;

  @ViewChild('data') data: LineChartComponent;

  constructor() {
   }

   setDataSet(x, y, title): void {
    this.lineChartData = {
      labels: x,
      datasets: [
        {
          data: y,
          label: title,
          fill: false,
          tension: 0.8,
          // borderColor: 'black',
          // backgroundColor: 'blue'
        }
      ]
    };
   }

   addDataSet(y, title): void {
    console.log(y);
    this.lineChartData.datasets.push({
      data: y,
      label: title,
      tension: 0.8,
      // backgroundColor: 'green'
    })
   }

  ngOnInit(): void {
    
  }

  ngAfterInit(): void {
    
  }

  public lineChartData: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      x: {
        beginAtZero: true,
        type: 'linear',
      },
      y: {
        type: 'linear'
      }
    }
  };
  public lineChartLegend = true;


}
