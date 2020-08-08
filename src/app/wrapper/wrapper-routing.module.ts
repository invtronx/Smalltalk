import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from './wrapper.component';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../feed/feed.module').then((m) => m.FeedModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
        canLoad: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
