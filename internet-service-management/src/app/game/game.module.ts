import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePopularComponent } from './game-popular/game-popular.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';



@NgModule({
  declarations: [
    GamePopularComponent,
    DeleteGameComponent,
    GameDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
