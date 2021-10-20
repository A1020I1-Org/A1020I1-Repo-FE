import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceOrderComponent} from "./service/service-order/service-order.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ServiceModule} from "./service/service.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule
  ],
  providers: [ServiceOrderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
