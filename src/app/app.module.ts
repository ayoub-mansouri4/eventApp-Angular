import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { LoginService } from './services/login.service';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { MyeventsComponent } from './components/myevents/myevents.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    UserRegisterComponent,
    AddEventComponent,
    MyeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //
    HttpClientModule,//
    
  ],
  providers: [LoginService],//
  bootstrap: [AppComponent]
})
export class AppModule { }
