import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComputerRoutingModule} from "./computer/computer-routing.module";
import {NgxPaginationModule} from "ngx-pagination";



const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [

  ]
  imports: [RouterModule.forRoot(routes), ComputerRoutingModule, NgxPaginationModule ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
