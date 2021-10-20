import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOrderComponent } from './service-order/service-order.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    ServiceOrderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class ServiceModule { }
