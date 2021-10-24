import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComputerCreateComponent} from "./computer-create/computer-create.component";
import {ComputerEditComponent} from "./computer-edit/computer-edit.component";



@NgModule({
  declarations: [
    ComputerCreateComponent,
    ComputerEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComputerModule { }
