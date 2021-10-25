import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComputerCreateComponent} from "./computer-create/computer-create.component";
import {ComputerEditComponent} from "./computer-edit/computer-edit.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'createComputer', component: ComputerCreateComponent},
  {path: 'editComputer/:id', component: ComputerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerRoutingModule { }
