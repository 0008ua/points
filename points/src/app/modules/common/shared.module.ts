import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionConfirmComponent } from './action-confirm/action-confirm.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ActionConfirmComponent],
  exports: [ActionConfirmComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
})
export class SharedModule {}
