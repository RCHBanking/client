import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/all`);
  }
}
