import { Component, ViewChild } from '@angular/core';
import { AccuracyTableComponent } from './accuracy-table/accuracy-table.component';
import { ChooseModelService } from './choose-model.service';
import { LineChartComponent } from './line-chart/line-chart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('line_chart') lineChart: LineChartComponent;
  @ViewChild('error_table') errorTable: AccuracyTableComponent;

  chosenModelIndex: number = 0;
  title = 'front';
  upload = false;
  dashboard = true;
  ifShowChart: boolean = true;
  ifErrorsClicked: boolean = true;
  models: string[] = ['Basic Execution Time Model',
   'Logarithmic Poisson Model',
    'Goel-Okumoto Model (G-O)',
    'Delayed S-Shaped Model',
    'Inflection S-Shaped Model',
    'Yamada Exponential Model'];

  constructor(private chooseModelService: ChooseModelService) {}

  onSubmit(): void {
    console.log(this.chosenModelIndex);

    this.chooseModelService.send({"model": this.chosenModelIndex, "param": 0.5}).subscribe(
      (response: any) => {
        let data = JSON.parse(response);
        if (data.status == 'OK'){
          //file uploaded to the server
          console.log(data);
          this.ifShowChart = true;
          // this.lineChart.setDataSet(data.xdata, data.ydata, "Real Data");
          this.lineChart.setDataSet(data.xdata, data.ydata, data.x2, data.fit2, "Real Data", this.models[data.model]);
          this.lineChart.setDataSet2(data.xdata, data.miu, data.x2, data.miu2, "Real Data", this.models[data.model]);
          // this.lineChart.addDataSet(data.x2, data.fit2, this.models[data.model]);

        } else {
          console.error("Network Error")
        }
      }
  );
  }

  onCalculateErrors(): void {
    this.chooseModelService.getErrors().subscribe(
      (response: any) => {
        if (response.status == 'OK') {
          this.ifErrorsClicked = true;
          this.errorTable.updateErrors(response['errors']);
        } else {
          console.error("Network Error");
        }
      }
    );
  }

  onModelSelected(msg): void {
    this.chosenModelIndex = msg;
  }
}
