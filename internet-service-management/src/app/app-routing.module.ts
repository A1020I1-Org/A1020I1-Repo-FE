import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDetailComponent} from "./customer/customer-detail/customer-detail.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch:'full'},
  {path: 'customer-detail/:id', component: CustomerDetailComponent},
  { path: 'customer',  component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
