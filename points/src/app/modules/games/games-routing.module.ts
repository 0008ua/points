import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: GamesPage,
  //   children: [
  //     {
  //       path: ':id',
  //       loadChildren: () => import('./game/game.module').then((m) => m.GamePageModule),
  //     },
  //     // {
  //     //   path: 'train',
  //     //   loadChildren: () => import('./train/train.module').then(m => m.TrainPageModule)
  //     // },
  //     // {
  //     //   path: 'uno',
  //     //   loadChildren: () => import('./uno/uno.module').then(m => m.UnoPageModule)
  //     // },
  //     // {
  //     //   path: 'cards',
  //     //   loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)
  //     // },
  //     // {
  //     //   path: '',
  //     //   redirectTo: 'uno',
  //     //   pathMatch: 'full',
  //     // },
  //     {
  //       path: '**',
  //       redirectTo: 'list',
  //     },
  //   ],
  // },

  {
    path: '',
    component: GamesPage,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./games-list/games-list.module').then((m) => m.GamesListPageModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./game/game.module').then((m) => m.GamePageModule),
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
