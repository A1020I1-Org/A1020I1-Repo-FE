import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDeleteComponent } from './service-delete/service-delete.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ServiceRoutingModule} from "./service-routing.module";
@NgModule({
    declarations: [
        ServiceListComponent,
        ServiceDeleteComponent
    ],
    exports: [
        ServiceListComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
