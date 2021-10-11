import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDeleteComponent } from './service-delete/service-delete.component';

@NgModule({
    declarations: [
        ServiceListComponent,
        ServiceDeleteComponent
    ],
    exports: [
        ServiceListComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
