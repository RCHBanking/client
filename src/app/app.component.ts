import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './Models/customer';
import { CustomerService } from './Services/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  public customers?: Customer[];

  ngOnInit() {
    this.getCustomers();
  }

  constructor(private customerService: CustomerService){}

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        //this.customers = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
