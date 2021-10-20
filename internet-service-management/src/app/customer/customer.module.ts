import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from "./customer-routing.module";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // MatDialogModule,
    // BrowserAnimationsModule,
    // NgxPaginationModule,
    // MatButtonModule
  ],
})
export class CustomerModule { }
