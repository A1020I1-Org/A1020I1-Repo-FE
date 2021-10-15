import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComputerComponent } from './show-computer/show-computer.component';
import { DeleteComputerComponent } from './delete-computer/delete-computer.component';
import {ComputerRoutesModule} from "./computer-routes.module";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MaterialModule} from "../material-module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ShowComputerComponent,
    DeleteComputerComponent
  ],
  exports: [
    ShowComputerComponent
  ],
  imports: [
    CommonModule,
    ComputerRoutesModule,
    RouterModule,
    MatDialogModule,
    MaterialModule,
    FormsModule,
  ]
})
export class ComputerModule { }
