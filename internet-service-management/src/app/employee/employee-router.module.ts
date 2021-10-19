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
  ]
})
export class EmployeeRouterModule { }
