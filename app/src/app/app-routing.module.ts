import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from '../app/admin-page/admin-page.component'
import {CreateTripPageComponent} from '../app/create-trip-page/create-trip-page.component'
import {ViewTripPageComponent} from '../app/view-trip-page/view-trip-page.component'
import {LoginPageComponent} from '../app/login-page/login-page.component'
import {SignupPageComponent} from '../app/signup-page/signup-page.component'

const routes: Routes = [
  {path: 'admin', component: AdminPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create-trip', component: CreateTripPageComponent},
  {path: 'view-trip', component: ViewTripPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
