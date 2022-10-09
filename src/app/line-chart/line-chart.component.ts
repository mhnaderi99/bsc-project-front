import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild('data') data: LineChartComponent;

  constructor() {
   }

   setDataSet(xx, yy, x2, y2, title, title2): void {
    let xy = xx.map((x, i) => ({ x, y: yy[i] }));
    let x2y2 = x2.map((x, i) => ({ x, y: y2[i] }));


    this.lineChartData = {
      datasets: [{
          data: xy,
          label: title,
          borderWidth: 2,
          fill: false,
          tension: 0,

        },
        {
          data: x2y2,
          label: title2,
          borderWidth: 2,
          fill: false,
          tension: 0,

        }
      ]
    };
   }

   setDataSet2(xx, yy, x2, y2, title, title2): void {
    let xy = xx.map((x, i) => ({ x, y: yy[i] }));
    let x2y2 = x2.map((x, i) => ({ x, y: y2[i] }));


    this.lineChartData2 = {
      datasets: [{
          data: xy,
          label: title,
          borderWidth: 2,
          fill: false,
          tension: 0,
        },
        {
          data: x2y2,
          label: title2,
          borderWidth: 2,
          fill: false,
          tension: 0,
        }
      ]
    };
   }

  ngOnInit(): void {
    
  }

  ngAfterInit(): void {
    
  }

  public lineChartData: ChartConfiguration<'line'>['data'];
  public lineChartData2: ChartConfiguration<'line'>['data'];

  public lineChartOptions: ChartOptions<'line'> = {
    
    elements: {
      point:{
          radius: 0
      }
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Failure Rate'
      }
    },
    scales: {
      xAxes: {
        title: {
          display: true,
          text: 'time(cpu hour)'
        },
        beginAtZero: true,
        type: 'linear'
      },
      yAxes: {
        title: {
          display: true,
          text: 'failure rate(1/cpu hour)'
        },
        type: 'linear'
      }
    }
  };

  public lineChartOptions2: ChartOptions<'line'> = {
    elements: {
      point:{
          radius: 0
      }
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cumulative Failures Count'
      }
    },
    scales: {
      xAxes: {
        title: {
          display: true,
          text: 'time(cpu hour)'
        },
        beginAtZero: true,
        type: 'linear'
      },
      yAxes: {
        title: {
          display: true,
          text: 'Number of Failures'
        },
        type: 'linear'
      }
    }
  };

  public lineChartLegend = true;
  public lineChartLegend2 = true;


}
