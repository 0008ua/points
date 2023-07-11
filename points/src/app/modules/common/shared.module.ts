import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionConfirmComponent } from './action-confirm/action-confirm.component';
import { TranslateModule } from '@ngx-translate/core';
import { SelectWithSearchComponent } from './select-with-search/select-with-search.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ActionConfirmComponent, SelectWithSearchComponent],
  exports: [ActionConfirmComponent, SelectWithSearchComponent],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
})
export class SharedModule {}
