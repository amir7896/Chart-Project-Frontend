import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarModule } from 'ng-sidebar';


// Chart Module
import { ChartsModule } from 'ng2-charts';
// HttpClientModule

// Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';

// Toaster Message Module 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenService } from './services/TokenService/token.service';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ResetComponent } from './components/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    TutorialsComponent,
    AboutUsComponent,
    DashBoardComponent,
    PasswordResetComponent,
    ResetComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot(),
    ChartsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
