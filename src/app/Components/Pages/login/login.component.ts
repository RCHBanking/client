import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: string = '';
  errorMessage = 'Invalid Credentials';
  successMessage?: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.loginService.logintest(this.username, this.password).subscribe((result) => { 
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // redirect to main page
      this.router.navigate(['/homepage']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
