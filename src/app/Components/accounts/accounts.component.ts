import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { AccountService } from 'src/app/Services/account/account.service';

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

  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccountsTest().subscribe(accounts => this.accounts = accounts);
  }

}