import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderServiceComponent } from './order-service/order-service.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    OrderServiceComponent,
  ],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class OrderModule { }
