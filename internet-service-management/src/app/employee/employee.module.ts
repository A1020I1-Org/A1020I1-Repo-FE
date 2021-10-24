import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {EmployeeRouterModule} from "./employee-router.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PhonePipe} from "../phone.pipe";


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    EmployeeRouterModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class EmployeeModule {
}
