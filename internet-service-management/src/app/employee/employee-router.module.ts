import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";

const routerEmployee: Routes = [
  {
    path: 'employee-create', component: EmployeeCreateComponent
  }, {
    path: 'employee-edit/:id', component: EmployeeEditComponent
  }, {
    path: 'employee-view/:id', component: EmployeeDetailComponent
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerEmployee)
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
