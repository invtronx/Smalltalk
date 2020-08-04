import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FollowedUsersListComponent } from './followed-users-list/followed-users-list.component';
import { FollowingUsersListComponent } from './following-users-list/following-users-list.component';

@NgModule({
  declarations: [UsersListComponent, UserDetailComponent, UserEditorComponent, NotificationsComponent, FollowedUsersListComponent, FollowingUsersListComponent],
  imports: [CommonModule, CoreModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
