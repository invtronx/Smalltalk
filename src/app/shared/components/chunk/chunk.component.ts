import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
}
