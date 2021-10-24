import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePopularComponent} from "./game/game-popular/game-popular.component";
import {HeaderComponent} from "./header-footer/header/header.component";
import {FooterComponent} from "./header-footer/footer/footer.component";

const routes: Routes = [
  {path:'game', component: GamePopularComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
