import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Chunk } from 'src/app/core/models/chunk';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-chunk-interactors',
  templateUrl: './chunk-interactors.component.html',
  styleUrls: ['./chunk-interactors.component.scss'],
})
export class ChunkInteractorsComponent implements OnInit {
  @Input() chunk: Chunk;

  likeButtonClasses: Object;
  likeCount: number;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.likeButtonClasses = {
      interactors__like: true,
      colored: this.chunk.isLiked,
    };
    this.likeCount = this.chunk.likeCount;
  }

  toggleLike(willLike: boolean) {
    this.likeCount = this.likeCount + (willLike ? 1 : -1);
    this.chunk.isLiked = willLike;
    this.likeButtonClasses = { ...this.likeButtonClasses, colored: willLike };
  }

  handleLike(): void {
    if (this.chunk.isLiked) {
      this.api.delete(`chunks/${this.chunk.slug}/like`).subscribe({
        next: () => {
          this.toggleLike(false);
          console.log('Post unliked');
        },
        error: () => console.log('Cannot dislike post'),
      });
    } else {
      this.api.post(`chunks/${this.chunk.slug}/like`).subscribe({
        next: () => {
          this.toggleLike(true);
          console.log('Post liked');
        },
        error: () => console.log('Cannot like post'),
      });
    }
  }

  handleComment(): void {
    this.router.navigate(['chunks', this.chunk.slug]);
  }

  handleShare(): void {
    const rootSourceSlug = this.chunk?.sharedSource?.slug || this.chunk.slug;
    this.router.navigate(['/compose'], {
      queryParams: { sharedSlug: rootSourceSlug },
    });
  }
}
