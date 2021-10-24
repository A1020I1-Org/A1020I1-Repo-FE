import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EmployeeRouterModule} from "./employee-router.module";
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {EmployeeRouterModule} from "./employee-router.module";
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PhonePipe} from "../phone.pipe";



@NgModule({
    declarations: [
        EmployeeCreateComponent,
        EmployeeEditComponent,
        EmployeeDetailComponent
    ],
    exports: [
        EmployeeCreateComponent,
        EmployeeEditComponent,
        EmployeeDetailComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRouterModule
=======
  declarations: [
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    PhonePipe
  ],
  exports: [
    ListEmployeeComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    EmployeeRouterModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class EmployeeModule { }
