import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const header = {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const requestOptions = {
      headers: header
    }

    lastValueFrom(this.http.get(`${environment.apiUrl}/api/customer/profile`, requestOptions)).then((res:any) => {
      this.profile.firstname = res.firstname;
      this.profile.surname = res.surname;
      this.profile.username = res.username;
      this.profile.email = res.email;
      this.profile.address1 = res.address1;
      this.profile.address2 = res.address2;
      this.profile.state = res.state;
      this.profile.zipcode = res.zipcode;
    });

  }
}


