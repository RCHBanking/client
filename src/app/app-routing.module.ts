import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
<<<<<<< HEAD
=======
import { SummaryComponent } from './Components/Pages/summary/summary.component';
>>>>>>> dabc9d1207cc3ad1088f494d7af5698300a0badf

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
    path: 'register',
    component: RegisterComponent 
  },
  {
    path: 'summary',
    component: SummaryComponent
  },

  {
    //* is the wildcard character
    path: "**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
