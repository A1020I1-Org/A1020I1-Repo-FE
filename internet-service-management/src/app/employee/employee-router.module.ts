import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {DetailEmployeeComponent} from "./detail-employee/detail-employee.component";


const routersEmployee: Routes =[
  {path: 'listEmployee',component: ListEmployeeComponent},
  {path: 'createEmployee',component: CreateEmployeeComponent},
  {path: 'viewEmployee:/id',component: DetailEmployeeComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routersEmployee)
  ]
})
export class EmployeeRouterModule { }
