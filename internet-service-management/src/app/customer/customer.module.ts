import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRegisterComponent} from "./customer-register/customer-register.component";
import {CustomerRoutingModule} from "./customer-routing.module";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CustomerRegisterComponent
  ],
  exports: [
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CustomerModule { }
