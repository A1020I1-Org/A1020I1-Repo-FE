import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityRoutingModule} from "./security/security-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),SecurityRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
