import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/core/services/api.service';
import { Chunk } from 'src/app/core/models/chunk';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-composure',
  templateUrl: './composure.component.html',
  styleUrls: ['./composure.component.scss'],
})
export class ComposureComponent implements OnInit {
  composeForm = new FormGroup({
    content: new FormControl('', []),
  });
  sharedSource: Chunk | null;
  editingChunk: Chunk | null;
  currentUser: User;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.sharedSource = data.resolvedData.sharedSource?.chunk || null;
      this.editingChunk = data.resolvedData.chunk?.chunk || null;
      this.currentUser = data.resolvedData.currentUser.currentUser;
      this.composeForm.setValue({ content: this.editingChunk?.content || '' });
    });
  }

  getChunkContent(): string {
    return this.editingChunk?.content || '';
  }

  handleChunkComposure(): void {
    if (!this.editingChunk) {
      this.api
        .post('chunks', {
          ...this.composeForm.value,
          sharedSource: this.sharedSource?._id || null,
        })
        .subscribe({
          next: () => {
            console.log('Chunk posted');
            this.router.navigate(['/']);
          },
          error: () => console.log('Failed to post chunk'),
        });
    } else {
      this.api
        .put(`chunks/${this.editingChunk.slug}`, this.composeForm.value)
        .subscribe({
          next: () => {
            console.log('Chunk edited');
            this.router.navigate(['/']);
          },
          error: () => console.log('Failed to edit chunk'),
        });
    }
  }
}
