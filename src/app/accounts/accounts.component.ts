import { Component, OnInit } from '@angular/core';
import { Account } from '../Models/account';
import { ACCOUNTS } from '../Models/mock-accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = ACCOUNTS;

  constructor() { }

  ngOnInit(): void {
  }

}
