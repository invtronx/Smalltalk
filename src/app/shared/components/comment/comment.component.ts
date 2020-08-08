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

  get formatCommentCreationDate(): string {
    const dateObject: any = new Date(this.comment.createdAt);
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
