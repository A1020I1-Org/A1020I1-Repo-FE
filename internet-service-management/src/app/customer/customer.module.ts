import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from "./customer-routing.module";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    // MatDialogModule,
    // BrowserAnimationsModule,
    // NgxPaginationModule,
    // MatButtonModule
  ],
})
export class CustomerModule { }
