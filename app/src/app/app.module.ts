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
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FoodComponent } from './components/food/food.component';
import { DatePipe } from '@angular/common';



import { FromFormComponent } from './components/from-form/from-form.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { AttractionsComponent } from './components/attractions/attractions.component';


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
    FoodComponent,

    FromFormComponent,
    TripCardComponent,
    AttractionsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],

  providers: [ DatePipe],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
