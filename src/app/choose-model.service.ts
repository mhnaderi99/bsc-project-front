import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChooseModelService {
    
  // API url
  baseApiUrl = "http://localhost:8000/calculate"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  send(params):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("data", JSON.stringify(params));
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, formData, {responseType: 'text'})
  }

  //estimate intensity rate
  estimateIntensityRate(time): Observable<any> {
    let apiUrl = 'http://localhost:8000/intensityRateAtTime';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("time",time);
    return this.http.get(apiUrl, {params: queryParams})
  }

  //remaining faults until target
  remainingFaultsUntilTarget(target): Observable<any> {
    let apiUrl = 'http://localhost:8000/remainingFaultsUntilTarget';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("target",target);
    return this.http.get(apiUrl, {params: queryParams})
  }


  //remaining faults until target
  remainingTimeUntilTarget(target): Observable<any> {
    let apiUrl = 'http://localhost:8000/remainingTimeUntilTarget';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("target",target);
    return this.http.get(apiUrl, {params: queryParams})
  }

  
  //faults in time range
  faultsInTimeRange(fromTime, toTime): Observable<any> {
    let apiUrl = 'http://localhost:8000/faultsInTimeRange';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("from",fromTime);
    queryParams = queryParams.append("to",toTime);
    return this.http.get(apiUrl, {params: queryParams})
  }


  //current reliability
  estimateCurrentReliablity(delta_t): Observable<any> {
    let apiUrl = 'http://localhost:8000/estimateReliability';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("delta_t",delta_t);
    return this.http.get(apiUrl, {params: queryParams})
  }


  //safe time reliability
  safeTimeReliablity(target): Observable<any> {
    let apiUrl = 'http://localhost:8000/safeTimeReliability';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("target", target);
    return this.http.get(apiUrl, {params: queryParams})
  }


  getErrors(): Observable<any> {
    let apiUrl = 'http://localhost:8000/getErrors';
    return this.http.get(apiUrl)
  }

}
