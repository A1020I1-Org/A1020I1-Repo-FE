import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from "./edit/edit.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  { path: 'customer/create', component: CreateComponent },
  { path: 'customer/edit/:id', component: EditComponent },
  { path: 'customer/info/:id', component: DetailComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
