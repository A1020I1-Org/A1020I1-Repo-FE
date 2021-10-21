import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {CustomerModule} from "../customer/customer.module";



@NgModule({
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ],
  imports: [
    CommonModule,
    CustomerModule
  ]
})
export class EmployeeModule { }
