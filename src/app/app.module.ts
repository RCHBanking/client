import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
