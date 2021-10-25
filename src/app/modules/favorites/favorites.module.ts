import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


@NgModule({
  declarations: [
    FavoritePageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
