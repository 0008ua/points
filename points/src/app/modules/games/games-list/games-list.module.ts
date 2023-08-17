import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesListPageRoutingModule } from './games-list-routing.module';

import { GamesListPage } from './games-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesListPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [GamesListPage],
})
export class GamesListPageModule {}
