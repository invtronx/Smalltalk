import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListResolveService } from 'src/app/core/services/users-list-resolver.service';
import { UserDetailResolverService } from '../core/services/user-detail-resolver.service';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FetchCurrentUserService } from '../core/services/fetch-current-user.service';
import { FollowedUsersListComponent } from './followed-users-list/followed-users-list.component';
import { FollowingUsersListComponent } from './following-users-list/following-users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    resolve: { resolvedData: UsersListResolveService },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'me/edit',
    component: UserEditorComponent,
    resolve: { resolvedData: FetchCurrentUserService },
  },
  {
    path: ':username',
    component: UserDetailComponent,
    resolve: { resolvedData: UserDetailResolverService },
  },
  {
    path: ':username/followers',
    component: FollowedUsersListComponent,
    resolve: { resolvedData: UserDetailResolverService },
  },
  {
    path: ':username/following',
    component: FollowingUsersListComponent,
    resolve: { resolvedData: UserDetailResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
