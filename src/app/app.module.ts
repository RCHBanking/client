import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    SummaryComponent,
    AccountsComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


