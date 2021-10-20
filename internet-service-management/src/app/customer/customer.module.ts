import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRegisterComponent} from "./customer-register/customer-register.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CustomerRegisterComponent
  ],
  exports: [
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
