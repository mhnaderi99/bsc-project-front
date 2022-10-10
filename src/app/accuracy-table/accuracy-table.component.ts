import { Component, OnInit } from '@angular/core';


export interface ModelRow  {
  
  modelName: string;
  error: string;
}

let dataset: ModelRow[] = [
  {modelName: 'Basic Execution Time Model', error: ''},
  {modelName: 'Logarithmic Poisson Model', error: ''},
  {modelName: 'Goel-Okumoto Model (G-O)', error: ''},
  {modelName: 'Delayed S-Shaped Model', error: ''},
  {modelName: 'Inflection S-Shaped Model', error: ''},
  {modelName: 'Yamada Exponential Model', error: ''},

]

@Component({
  selector: 'app-accuracy-table',
  templateUrl: './accuracy-table.component.html',
  styleUrls: ['./accuracy-table.component.css']
})
export class AccuracyTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'error'];
  dataSource = dataset;

  updateErrors(errors): void {
    console.log("here" , errors)
    for (let i = 0; i<dataset.length; i++) {
      dataset[i].error = errors[i].toFixed(2);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
