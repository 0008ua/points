import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { TranslateModule } from '@ngx-translate/core';
import { RoundModule } from '../round/round.module';
import { GamersModule } from '../gamers/gamers.module';
import { GameResultComponent } from './game-result/game-result.component';
import { SharedModule } from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    RoundModule,
    GamersModule,
    SharedModule,
  ],
  declarations: [GamePage, GameResultComponent],
})
export class GamePageModule {}
