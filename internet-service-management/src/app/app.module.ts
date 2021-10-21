import {StatisticalModule} from "./statistical/statistical.module";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeModule} from "./employee/employee.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {ToastrModule} from "ngx-toastr";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import {RouterModule} from "@angular/router";
import {ComputerModule} from "./computer/computer.module";
import {ReactiveFormsModule} from "@angular/forms";


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
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    EmployeeModule,
    RouterModule
    ComputerModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
