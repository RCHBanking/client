import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
import { RegisterComponent } from './Components/Pages/register/register.component';

const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'register',
    component: RegisterComponent 
  },

  {
    //* is the wildcard character
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
