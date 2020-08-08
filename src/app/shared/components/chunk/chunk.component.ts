import { Component, Input, OnInit } from '@angular/core';

import { Chunk } from 'src/app/core/models/chunk';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.scss'],
})
export class ChunkComponent implements OnInit {
  @Input() chunk: Chunk;
  @Input() shortForm: boolean;
  @Input() canModify: boolean;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  deleteChunk(): void {
    this.api
      .delete(`chunks/${this.chunk.slug}`, { observe: 'response' })
      .subscribe({
        next: () => console.log('Chunk deleted'),
        error: () => console.log('Failed to delete chunk'),
      });
    location.reload();
  }

  editChunk(): void {
    this.router.navigate(['/compose'], {
      queryParams: {
        sharedSlug: this.chunk.sharedSource?.slug || null,
        currentSlug: this.chunk.slug,
      },
    });
  }

  get formatChunkCreationDate(): string {
    const dateObject: any = new Date(this.chunk.createdAt);
    const now: any = new Date();
    const secondsElapsed: number = (now - dateObject) / 1000;

    const daysElapsed: number = Math.floor(secondsElapsed / 86400);
    const hoursElapsed: number = Math.round(secondsElapsed / 3600);
    const minutesElapsed: number = Math.round(secondsElapsed / 60);
    const monthsElapsed: number = Math.round(daysElapsed / 30);

    if (monthsElapsed > 0) {
      return `${monthsElapsed}mo`;
    } else if (daysElapsed > 0) {
      return `${daysElapsed}d`;
    } else if (hoursElapsed > 0) {
      return `${hoursElapsed}h`;
    } else if (minutesElapsed > 1) {
      return `${minutesElapsed}m`;
    } else {
      return 'Just now';
    }
  }
}
