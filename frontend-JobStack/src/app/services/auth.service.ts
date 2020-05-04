import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      birthDate: user.birthDate,
      gender: user.gender,
      nameOfSchool: user.nameOfSchool,
      nameOfUni: user.nameOfUni,
      degreeQual: user.degreeQual,
      codingSkill: user.codingSkill,
      socialSkill: user.socialSkill,
      langSkill: user.langSkill,
      webDev: user.webDev,
      programDev: user.programDev,
      backend: user.backend,
      frontend: user.frontend,
      fullstack: user.fullstack,
      web: user.web,
      mobile: user.mobile,
      uiux: user.uiux
    }, httpOptions);
  }
}



