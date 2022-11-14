import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted = false;
username: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["",[Validators.required,]]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

  }
}
