import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/Models/transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public header = {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
  public requestOptions = {
    headers: this.header
  } 

  getExpenseTransactions(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/api/transaction/view-expenses/${id}`, this.requestOptions)
  }

  getIncomeTransactions(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/api/transaction/view-income/${id}`, this.requestOptions)
  }

  getIncomeSum(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/api/transaction/view-income-sum/${id}`, this.requestOptions);
  }

  getExpenseSum(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/api/transaction/view-expense-sum/${id}`, this.requestOptions);
  }
}
