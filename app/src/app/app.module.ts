import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateTripPageComponent } from './create-trip-page/create-trip-page.component';
import { ViewTripPageComponent } from './view-trip-page/view-trip-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminPageComponent,
    CreateTripPageComponent,
    ViewTripPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
