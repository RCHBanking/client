import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { Transaction } from 'src/app/Models/transaction';
import { AccountService } from 'src/app/Services/account/account.service';
import { TransactionService } from 'src/app/Services/transaction/transaction.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public accounts: Account[] = [];
  public transactions: Transaction[] = [];
  public income: number = 0;
  public expenses: number = 0;
  public selectedAccount?: Account;

  onSelect(account: Account): void {
    this.selectedAccount = account;
    this.setIncome(this.selectedAccount.id);
    this.setExpenses(this.selectedAccount.id);
    this.getAccounts();
  }

  

  constructor(private accountService: AccountService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccountsTest().subscribe(accounts => this.accounts = accounts);
  }

  getIncome(): void {
    this.transactionService.getTransactions(1).subscribe(transactions => this.transactions = transactions);
  }

  setIncome(id: number): void {
    this.transactionService.getIncomeSum(id).subscribe(income => this.income = income);
  }

  setExpenses(id: number): void {
    this.transactionService.getExpenseSum(id).subscribe(expenses => this.expenses = expenses);
  }

}