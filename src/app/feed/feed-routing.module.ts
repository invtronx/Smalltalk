import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { ChunkDetailComponent } from './chunk-detail/chunk-detail.component';
import { ChunkDetailResolverService } from '../core/services/chunk-detail-resolver.service';
import { ComposureComponent } from './composure/composure.component';
import { ComposureResolverService } from '../core/services/composure-resolver.service';
import { FetchCurrentUserService } from '../core/services/fetch-current-user.service';
import { ChunkLikeListComponent } from './chunk-like-list/chunk-like-list.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    resolve: { resolvedData: FetchCurrentUserService },
  },
  {
    path: 'compose',
    component: ComposureComponent,
    resolve: { resolvedData: ComposureResolverService },
  },
  {
    path: 'chunks/:slug',
    component: ChunkDetailComponent,
    resolve: { resolvedData: ChunkDetailResolverService },
  },
  {
    path: 'chunks/:slug/like',
    component: ChunkLikeListComponent,
    resolve: { resolvedData: FetchCurrentUserService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
