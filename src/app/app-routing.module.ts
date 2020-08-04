import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { AuthGuard } from 'src/app/core/services/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalComponent } from './portal/portal/portal.component';
import { LogoutComponent } from './portal/logout/logout.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
  },
  { path: 'portal/logout', component: LogoutComponent },
  {
    path: '',
    loadChildren: () => import('./feed/feed.module').then((m) => m.FeedModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canLoad: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
