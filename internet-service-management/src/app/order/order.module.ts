import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderServiceComponent } from './order-service/order-service.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OrderServiceDetailComponent } from './order-service-detail/order-service-detail.component';
import {OrderRoutingModule} from "./order-routing.module";

@NgModule({
  declarations: [
    OrderServiceComponent,
    OrderServiceDetailComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
  ]
})
export class OrderModule { }
