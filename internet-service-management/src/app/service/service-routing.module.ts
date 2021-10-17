import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceDeleteComponent} from "./service-delete/service-delete.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: 'service-list', component: ServiceListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
})
export class ServiceRoutingModule {
}
