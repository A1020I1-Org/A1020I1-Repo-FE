import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {path: 'service-list', component: ServiceListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ],
})
export class ServiceRoutingModule {
}
