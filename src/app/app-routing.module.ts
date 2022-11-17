import { ProfileComponent } from './Components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { SummaryComponent } from './Components/summary/summary.component';

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
    path: 'summary',
    component: SummaryComponent
  },

  {
    path:'profile',
    component: ProfileComponent
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
