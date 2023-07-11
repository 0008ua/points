import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorLogRoutingModule } from './error-log-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorLogComponent } from './error-log.component';
import { SharedModule } from '../../common/shared.module';
import { ErrorDetailsComponent } from './error-details/error-details.component';

@NgModule({
  declarations: [ErrorLogComponent, ErrorDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ErrorLogRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    SharedModule,
  ],
})
export class ErrorLogModule {}
