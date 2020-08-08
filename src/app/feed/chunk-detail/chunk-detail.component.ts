import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Chunk } from 'src/app/core/models/chunk';
import { Comment } from 'src/app/core/models/comment';
import { User } from 'src/app/core/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-chunk-detail',
  templateUrl: './chunk-detail.component.html',
  styleUrls: ['./chunk-detail.component.scss'],
})
export class ChunkDetailComponent implements OnInit {
  chunk: Chunk;
  comments: Comment[];
  likes: User[];
  currentUser: User;

  commentForm = new FormGroup({
    content: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.chunk = data.resolvedData.chunk.chunk;
      this.comments = data.resolvedData.comments.comments;
      this.likes = data.resolvedData.likes.users;
      this.currentUser = data.resolvedData.currentUser.currentUser;
    });
  }

  reloadChunkDetails(): void {
    location.reload();
  }

  handleCommentForm(): void {
    this.api
      .post(`chunks/${this.chunk.slug}/comment`, this.commentForm.value, {
        observe: 'response',
      })
      .subscribe({
        next: () => console.log('Commented'),
        error: () => console.log('Unable to comment'),
      });
    this.reloadChunkDetails();
  }
}
