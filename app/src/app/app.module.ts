import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateTripPageComponent } from './create-trip-page/create-trip-page.component';
import { ViewTripPageComponent } from './view-trip-page/view-trip-page.component';
import { NavComponent } from './nav/nav.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { LodgingTabComponent } from './lodging-tab/lodging-tab.component';

// Angular Material component imports
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddButtonComponent } from './components/add-button/add-button.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';


=======
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { FlightsComponent } from './components/flights/flights.component';
>>>>>>> 308a17723126592e0fb652a078e7bb6df4352d39

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
    AddButtonComponent,
    FooterComponent,
    LodgingTabComponent,
    DestinationFormComponent,
    FlightsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
>>>>>>> 308a17723126592e0fb652a078e7bb6df4352d39
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
