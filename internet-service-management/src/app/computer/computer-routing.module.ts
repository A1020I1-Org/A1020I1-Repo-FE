import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComputerCreateComponent} from "./computer-create/computer-create.component";
import {ComputerEditComponent} from "./computer-edit/computer-edit.component";

const routes: Routes = [
  {path: 'computer-create', component: ComputerCreateComponent},
  {path: 'computer-edit/:id', component: ComputerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerRoutingModule { }
