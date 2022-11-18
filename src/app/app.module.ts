import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
import { SummaryComponent } from './Components/Pages/summary/summary.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AccountDetailComponent } from './Components/account-detail/account-detail.component';
import { TransferComponent } from './Components/Pages/transfer/transfer.component';


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
    AccountDetailComponent,
    TransferComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


