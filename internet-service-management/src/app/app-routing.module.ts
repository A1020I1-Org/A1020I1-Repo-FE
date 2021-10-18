import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee/employee-edit/employee-edit.component";
import {EmployeeDetailComponent} from "./employee/employee-detail/employee-detail.component";


const routes: Routes = [
  {
    path: 'employee-create', component: EmployeeCreateComponent
  }, {
    path: 'employee-edit/:id', component: EmployeeEditComponent
  }, {
    path: 'employee-view/:id', component: EmployeeDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
