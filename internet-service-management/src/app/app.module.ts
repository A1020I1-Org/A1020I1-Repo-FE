
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerModule} from "./customer/customer.module";
import { HttpClientModule} from "@angular/common/http";
import {EmployeeModule} from "./employee/employee.module";
import {StatisticalModule} from "./statistical/statistical.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import {RouterModule} from "@angular/router";
import {ComputerModule} from "./computer/computer.module";


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatisticalModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule,
    ComputerModule,
  ],

  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
