import { Component, OnInit } from '@angular/core';
import { ChooseModelService } from '../choose-model.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  intensityTime: number = 0;
  intensityTarget: number = 0;
  intensityRate: number = 0;
  remainingFaults: number = 0;
  remainingTime: number = 0;
  faultsInTimeRange: number = 0;
  fromTime: number = 0;
  toTime: number = 0;
  isEstimateIntensityClicked: boolean = false;
  isRemainingFaultsClicked: boolean = false;
  isRemainingTimeClicked: boolean = false;
  isEstimateTimeRangeClicked: boolean = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  onEstimateIntensity(): void {
    if (this.intensityTime != null) {

      this.chooseModelService.estimateIntensityRate(this.intensityTime).subscribe(
        (response: any) => {
          if (response.status == 'OK'){
            //file uploaded to the server
            console.log(response.rate);
            this.intensityRate = response.rate;
            this.isEstimateIntensityClicked = true;
          } else {
            console.error("Network Error")
          }
        }
    );

    }
  }

  onEstimateRemainingFaults(): void {
    if (this.intensityTarget != null) {
      this.chooseModelService.remainingFaultsUntilTarget(this.intensityTarget).subscribe(
        (response: any) => {
          if (response.status == 'OK') {
            console.log(response.faults);
            this.remainingFaults = Math.ceil(response.faults);
            this.isRemainingFaultsClicked = true;
          } else {
            console.error("Network Error")
          }
        }
      )
    }
  }

  onEstimateRemainingTime(): void {
    if (this.intensityTarget != null) {
      this.chooseModelService.remainingTimeUntilTarget(this.intensityTarget).subscribe(
        (response: any) => {
          if (response.status == 'OK') {
            console.log(response.time);
            this.remainingTime = Math.ceil(response.time);
            this.isRemainingTimeClicked = true;
          } else {
            console.error("Network Error")
          }
        }
      )
    }
  }

  onEstimateFaultsInTimeRange(): void {
    if (this.fromTime != null && this.toTime != null && this.toTime > this.fromTime) {
      this.chooseModelService.faultsInTimeRange(this.fromTime, this.toTime).subscribe(
        (response: any) => {
          if (response.status == 'OK') {
            console.log(response.faults);
            this.faultsInTimeRange = Math.ceil(response.faults);
            this.isEstimateTimeRangeClicked = true;
          } else {
            console.error("Network Error")
          }
        }
      )
    }
  }

  onTimeRangeChange(): void {
    console.log("here");
    this.isEstimateTimeRangeClicked = false;
  }

  constructor(private chooseModelService: ChooseModelService) { }

  ngOnInit(): void {
  }

}
