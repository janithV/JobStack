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

//   AUTH_SERVER = 'http://localhost:8080';
//   authSubject = new BehaviorSubject(false);

//   register(user: User): Observable<JwtResponse>{

//     return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/signup`,user).pipe(
//       tap((res: JwtResponse) => {

//         if(res.user){
//           localStorage.set("ACCESS_TOKEN", res.user.access_token);
//           localStorage.set("EXPIRES_IN", res.user.expires_in);
//           this.authSubject.next(true);
//         }
//       })
//     );

//   }

//   signIn(user: User): Observable<JwtResponse>{

//     return this.http.post(`${this.AUTH_SERVER}/login`, user).pipe(

//       tap(async (res: JwtResponse) =>{
//         if(res.user){
//           localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
//           localStorage.setItem("EXPIRES_IN", res.user.expires_in.toString());
//           this.authSubject.next(true);
//         }
//       } )
//     );
//   }

//   signOut(){
//     localStorage.removeItem("ACCESS_TOKEN");
//     localStorage.removeItem("EXPIRES_IN");
//     this.authSubject.next(false);
//     this.router.navigate(['/home']);
//   }

//   isAuthenticated(){
//     return this.authSubject.asObservable();
//   }

//  getProfile(){
//    return this.http.get(`${this.AUTH_SERVER}/profile`);
//  }

