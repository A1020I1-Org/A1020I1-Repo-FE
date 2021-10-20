import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceOrderComponent} from "./service/service-order/service-order.component";

const routes: Routes = [
  {path:'', redirectTo:'order', pathMatch: 'full'},
  {path:'orders', component: ServiceOrderComponent},
  {path:'order', children: [
      {path:'', component: ServiceOrderComponent},
      {path:'edit/:id', component: ServiceOrderComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
