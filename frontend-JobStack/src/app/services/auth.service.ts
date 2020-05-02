import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerURL } from '../shared/registerUrl';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../auth/user';
import { JwtResponse } from '../auth/jwt-response';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  AUTH_SERVER = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);

  register(user: User): Observable<JwtResponse>{
    
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/signup`,user).pipe(
      tap((res: JwtResponse) => {

        if(res.user){
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );

  }

  signIn(user: User): Observable<JwtResponse>{

    return this.http.post(`${this.AUTH_SERVER}/login`, user).pipe(

      tap(async (res: JwtResponse) =>{
        if(res.user){
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", res.user.expires_in.toString());
          this.authSubject.next(true);
        }
      } )
    );
  }

  signOut(){
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isAuthenticated(){
    return this.authSubject.asObservable();
  }

 
}
