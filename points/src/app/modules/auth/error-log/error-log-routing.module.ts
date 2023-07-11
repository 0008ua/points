import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLogComponent } from './error-log.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorLogComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorLogRoutingModule {}
