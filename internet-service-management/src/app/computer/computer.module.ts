import { NgModule } from '@angular/core';
import {ComputerCreateComponent} from "./computer-create/computer-create.component";
import {ComputerEditComponent} from "./computer-edit/computer-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ComputerCreateComponent,
    ComputerEditComponent,
    ListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule,
  ]
})
export class ComputerModule { }
