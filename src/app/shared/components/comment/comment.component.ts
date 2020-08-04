import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from 'src/app/core/models/comment';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comment: Comment;
  @Input() chunkSlug: string;
  @Input() canModify: boolean;

  @Output() isDeleted = new EventEmitter<boolean>();

  constructor(private api: ApiService) {}

  deleteComment(): void {
    this.api
      .delete(`chunks/${this.chunkSlug}/comment/${this.comment._id}`, {
        observe: 'response',
      })
      .subscribe({
        next: () => console.log('Comment deleted'),
        error: () => console.log('Failed to delete comment'),
      });
    this.isDeleted.emit(true);
  }
}
