import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { StatRoutingModule } from './stat-routing.module';
import { IonicModule } from '@ionic/angular';
import { RummyPage } from './rummy/rummy.page';
import { TranslateModule } from '@ngx-translate/core';
import { TrainPage } from './train/train.page';
import { FormsModule } from '@angular/forms';
import { StatWrapperComponent } from './stat-wrapper/stat-wrapper.component';

@NgModule({
  declarations: [StatComponent, StatWrapperComponent, RummyPage, TrainPage],
  imports: [
    CommonModule,
    StatRoutingModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  // exports: [StatWrapperComponent, RummyPage, TrainPage],
})
export class StatModule {}
