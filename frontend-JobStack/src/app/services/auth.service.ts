import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  constructor(private http: HttpClient) { }

  registerUser(user){

    this.http.post<any>(this._registerUrl,user)
  }
}
