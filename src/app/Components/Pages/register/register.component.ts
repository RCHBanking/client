import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password:string ='';
  firstname: string = '';
  surname: string = '';
  email:string = '';
  errorMessage = 'Invalid Credentials';
  successMessage?: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegistration() {
    this.registrationService.registerCustomer(this.firstname, this.surname, this.email, this.username, this.password);
    this.router.navigate(['/login']);
  }

  
}
  
