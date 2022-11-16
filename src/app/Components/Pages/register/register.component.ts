import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:["", [Validators.required]],
      surname:["", [Validators.required]],
      address1:["", [Validators.required]],
      address2:["",],
      state:["", [Validators.required, Validators.maxLength(2)]],
      zip:["", [Validators.required], Validators.minLength(5), Validators.maxLength(5)],
      email:["", [Validators.required, Validators.email,Validators]],
      username:["", [Validators.required]],
      password:["", [Validators.required]],
    });
  }

  get formControl() {
    return this.registerForm.controls;
  }

  onRegister(){

  }

}
