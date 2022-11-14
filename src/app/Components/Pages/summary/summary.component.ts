import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { tap } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public accounts: Account[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const header = {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const requestOptions = {
      headers: header
    }

    

    this.http.get<Account[]>(`${environment.apiUrl}/api/account/customerAccounts`, requestOptions)
    .pipe(tap((data) => data.forEach((account: Account) => this.accounts.push(account)))).subscribe();
  }

}
