import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ForbidenComponent } from './forbiden/forbiden.component';



@NgModule({
    declarations: [
        LoginComponent,
        AdminComponent,
        HomeComponent,
        ForbidenComponent
    ],
  exports: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SercurityModule { }
