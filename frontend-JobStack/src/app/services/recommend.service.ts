import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://jobstack.azurewebsites.net/api/auth/profile/";

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http: HttpClient,) { }

  getRecommendation(id): Observable<any>{
    return this.http.get(API_URL + 'recommendations');
  }



}
