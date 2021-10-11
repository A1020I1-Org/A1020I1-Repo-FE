import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShowComputerComponent} from "./show-computer/show-computer.component";
import {DeleteComputerComponent} from "./delete-computer/delete-computer.component";

const routesComputer: Routes =[
  {path: 'listComputer', component: ShowComputerComponent},
  {path: 'deleteComputer/:id', component: DeleteComputerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesComputer)
  ]
})
export class ComputerRoutesModule { }
