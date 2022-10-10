import { Component, OnInit, ViewChild } from '@angular/core';
import { ChooseModelService } from '../choose-model.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-model',
  templateUrl: './choose-model.component.html',
  styleUrls: ['./choose-model.component.css']
})
export class ChooseModelComponent implements OnInit {
  
  models: string[] = ['Basic Execution Time Model',
   'Logarithmic Poisson Model',
    'Goel-Okumoto Model (G-O)',
     'Delayed S-Shaped Model',
    'Inflection S-Shaped Model',
    'Yamada Exponential Model'];
  input00: string = '';

  @Output() selectedModel = new EventEmitter<number>();

  changeSelectedModel(value: string) {
    let index = this.models.indexOf(value)
    this.selectedModel.emit(index);
  }

  constructor(private chooseModelService: ChooseModelService) { }

  ngOnInit(): void {
  }

  onSend(modelNumber): void {
    console.log(modelNumber, this.input00);

    this.chooseModelService.send({"model": modelNumber, "param": this.input00}).subscribe(
      (response: any) => {
        let data = JSON.parse(response);
        if (data.status == 'OK'){
          //file uploaded to the server
          console.log(data)

        } else {
          console.error("Network Error")
        }
      }
  );
    
  }

}
