import { Component, ViewChild } from '@angular/core';
import { ChooseModelService } from './choose-model.service';
import { LineChartComponent } from './line-chart/line-chart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('line_chart') lineChart: LineChartComponent;
  chosenModelIndex: number = 0;
  title = 'front';
  upload = false;
  dashboard = true;
  ifShowChart: boolean = false;
  models: string[] = ['Basic Execution Time Model', 'Logarithmic Poisson Model', 'Goel-Okumoto Model (G-O)', 'Hyper-Exponential Model'];

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
          this.lineChart.setDataSet(data.xdata, data.ydata, "Real Data");
          this.lineChart.addDataSet(data.fit, this.models[data.model]);

        } else {
          console.error("Network Error")
        }
      }
  );
  }

  onModelSelected(msg): void {
    this.chosenModelIndex = msg;
  }
}
