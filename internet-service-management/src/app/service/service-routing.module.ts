import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";

const routes: Routes = [
  {path: 'service-list', component: ServiceListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
