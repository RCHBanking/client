import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { ACCOUNTS } from 'src/app/Models/mock-accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  selectedAccount?: Account;
  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  accounts = ACCOUNTS;

  constructor() { }

  ngOnInit(): void {
  }

}