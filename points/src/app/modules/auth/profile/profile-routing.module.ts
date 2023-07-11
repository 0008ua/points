import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../auth-admin.guard';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'telegram',
        loadChildren: () =>
          import('../telegram/telegram.module').then((m) => m.TelegramModule),
      },

      {
        path: 'error-log',
        loadChildren: () =>
          import('../error-log/error-log.module').then((m) => m.ErrorLogModule),
        canLoad: [AuthAdminGuard],
        canActivate: [AuthAdminGuard],
      },
      {
        path: '**',
        redirectTo: 'telegram',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
