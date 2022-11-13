import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
    public username: string = 'user';
    public password: string = 'password';

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post(environment.apiBaseUrl + `/api/auth/login`,
      { headers: { authorization: this.createBearerAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  logintest(username: string, password: string) {
    return this.http.post(environment.apiBaseUrl + `/api/auth/login`,
      { username: `${username}`, password: `${password}` }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBearerAuthToken(username: string, password: string) {
    return 'Bearer ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string , password: string) {
    // save the username to session
    this.username = username;
    this.password = password;
  }
}