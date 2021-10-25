import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrderServiceComponent} from "./order-service/order-service.component";

const routes: Routes = [
  { path: 'order', component: OrderServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
