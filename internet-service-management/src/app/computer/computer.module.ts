import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComputerComponent } from './show-computer/show-computer.component';
import { DeleteComputerComponent } from './delete-computer/delete-computer.component';
import {ComputerRoutesModule} from "./computer-routes.module";



// @ts-ignore
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
    ComputerRoutesModule
  ]
})
export class ComputerModule { }
