import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateRouteGuard } from '../../auth/deactivate-route.guard';

import { GamePage } from './game.page';

const routes: Routes = [
  {
    path: '',
    component: GamePage,
    canDeactivate: [DeactivateRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
