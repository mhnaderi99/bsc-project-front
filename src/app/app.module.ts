import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ResultsComponent } from './results/results.component';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { ChooseModelComponent } from './choose-model/choose-model.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ResultsComponent,
    ChooseModelComponent,
    LineChartComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    CommonModule,
    NgxChartsModule,
    HighchartsChartModule,
    FormsModule,
    NgChartsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule { }
