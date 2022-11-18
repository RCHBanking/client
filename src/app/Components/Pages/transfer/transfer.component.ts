import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/Services/transaction/transaction.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  amount: number = 0;
  description: string = '';
  fromId: number  = 0;
  toId: number = 0;

  

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.transactionService.registerTransfer(this.amount, this.description, this.fromId, this.toId);
    console.log("onSubmit Button works");
    console.log(this.amount, this.description, this.fromId, this.toId);
  }

}
