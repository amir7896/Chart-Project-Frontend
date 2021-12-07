import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'tutorials',
    canActivate: [AuthGuard],
    component: TutorialsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'dashboard',
    component:DashBoardComponent
  },
  {
    path: 'forgot-password',
    component: PasswordResetComponent
  },
  {
    path: 'reset/:token',
    component: ResetComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
