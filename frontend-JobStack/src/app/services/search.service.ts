import { Injectable } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router: Router) { }

  search(data): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/auth/search/" + data);
  }
}
