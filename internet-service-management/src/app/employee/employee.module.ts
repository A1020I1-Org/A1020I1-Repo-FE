import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EmployeeRouterModule} from "./employee-router.module";



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
  ]
})
export class EmployeeModule { }
