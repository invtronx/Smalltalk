import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ChunkComponent } from './components/chunk/chunk.component';
import { ChunkInteractorsComponent } from './components/chunk-interactors/chunk-interactors.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserComponent } from './components/user/user.component';
import { FeedGeneratorComponent } from './components/feed-generator/feed-generator.component';
import { UserListGeneratorComponent } from './components/user-list-generator/user-list-generator.component';
import { UserInteractorComponent } from './components/user-interactor/user-interactor.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    ChunkComponent,
    ChunkInteractorsComponent,
    CommentComponent,
    UserComponent,
    FeedGeneratorComponent,
    UserListGeneratorComponent,
    UserInteractorComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    UserComponent,
    ChunkComponent,
    CommentComponent,
    ChunkInteractorsComponent,
    FeedGeneratorComponent,
    UserListGeneratorComponent,
    UserInteractorComponent,
    NotificationComponent,
  ],
})
export class SharedModule {}
