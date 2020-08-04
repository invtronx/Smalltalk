import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { ChunkDetailComponent } from './chunk-detail/chunk-detail.component';
import { ComposureComponent } from './composure/composure.component';
import { ChunkLikeListComponent } from './chunk-like-list/chunk-like-list.component';

@NgModule({
  declarations: [FeedComponent, ChunkDetailComponent, ComposureComponent, ChunkLikeListComponent],
  imports: [CommonModule, SharedModule, FeedRoutingModule],
})
export class FeedModule {}
