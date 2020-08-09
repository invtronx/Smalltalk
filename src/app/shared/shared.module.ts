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
import { BackbarComponent } from './components/backbar/backbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';

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
    BackbarComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    LayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    UserComponent,
    AvatarComponent,
    ChunkComponent,
    CommentComponent,
    BackbarComponent,
    ChunkInteractorsComponent,
    FeedGeneratorComponent,
    UserListGeneratorComponent,
    UserInteractorComponent,
    NotificationComponent,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    LayoutModule,
  ],
})
export class SharedModule {}
