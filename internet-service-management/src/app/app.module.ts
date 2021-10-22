import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {ComputerModule} from "./computer/computer.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import { CreateComputerComponent } from './computer/create-computer/create-computer.component';
import { EditComputerComponent } from './computer/edit-computer/edit-computer.component';

import {MaterialModule} from "./material-module";


@NgModule({
  declarations: [
    AppComponent,
    CreateComputerComponent,
    EditComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ComputerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
