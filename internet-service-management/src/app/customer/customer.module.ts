import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
