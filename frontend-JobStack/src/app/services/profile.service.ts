import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(username):Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/auth/profile/" + username);
  }

  editProfile(user, id): Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/auth/update" + id , {
      codingSkill: user.codingSkill,
      socialSkill: user.socialSkill,
      webDev: user.webDev,
      langSkill: user.langSkill,
      programDev: user.programDev,
      backend: user.backend,
      frontend: user.frontend,
      fullstack: user.fullstack,
      mobile: user.mobile,
      web: user.webDev,
      uiux: user.uiux,
      firstname: user.firstname,
      lastname: user.lastname,
      nameOfSchool: user.nameOfSchool,
      nameOfUni: user.nameOfUni,
      degreeQual: user.degreeQual,

    });
  }
}
