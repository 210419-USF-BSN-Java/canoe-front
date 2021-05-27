import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateTripPageComponent } from './create-trip-page/create-trip-page.component';
import { ViewTripPageComponent } from './view-trip-page/view-trip-page.component';
import { NavComponent } from './nav/nav.component';
import { SignupFormComponent } from './signup-form/signup-form.component'


// Prime Imports
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminPageComponent,
    CreateTripPageComponent,
    ViewTripPageComponent,
    NavComponent,
    SignupFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
