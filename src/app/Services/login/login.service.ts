import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../../Models/authRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(authRequest: AuthRequest): Observable<AuthRequest> {
    return this.http.post<any>(`${this.apiServerUrl}/employee/add`, authRequest);
  }
}
