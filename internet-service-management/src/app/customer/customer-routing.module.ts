import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";


const routes: Routes = [
  {
    path: 'customer/list', component: CustomerListComponent,
  },
  {
    path: '',pathMatch: 'full', redirectTo: 'customer/list',
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

