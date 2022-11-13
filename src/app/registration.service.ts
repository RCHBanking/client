import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from './Models/customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public firstname?: string;
  public surname?: string;
  public email?: string;
  public username?: string;
  public password?: string;

  customer: Customer = {firstname: 'Christopher', surname: 'Gonzalez', email: 'myemail@domain.com', username:'rxcthefirst', password: 'password'};

  constructor(private http: HttpClient) { }

  registerCustomer(firstname: string, surname: string, email: string, username: string, password: string){    
    return this.http.post<any>(environment.apiBaseUrl + `/api/customer/register`, {firstname: `${firstname}`, surname: `${surname}`, email: `${email}`, username: `${username}`, password: `${password}`}).subscribe(data => {
      console.log(data)
    });
  }
}
