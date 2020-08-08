import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/core/models/user';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-user-interactor',
  templateUrl: './user-interactor.component.html',
  styleUrls: ['./user-interactor.component.scss'],
})
export class UserInteractorComponent implements OnInit {
  @Input() user: User;

  followerCount: number;
  followButtonClasses: { colored: boolean; interactors__follow: boolean };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.followButtonClasses = {
      interactors__follow: true,
      colored: this.user.isFollowing,
    };
    this.followerCount = this.user.followers;
  }

  toggleFollow(willFollow: boolean) {
    this.followerCount = this.followerCount + (willFollow ? 1 : -1);
    this.user.isFollowing = willFollow;
    this.followButtonClasses = {
      ...this.followButtonClasses,
      colored: willFollow,
    };
  }

  handleFollow(): void {
    if (this.user.isFollowing) {
      this.api.delete(`users/${this.user.username}/follow`).subscribe({
        next: () => {
          this.toggleFollow(false);
          console.log('User unfollowed');
        },
        error: () => console.log('Cannot unfollow user'),
      });
    } else {
      this.api.post(`users/${this.user.username}/follow`).subscribe({
        next: () => {
          this.toggleFollow(true);
          console.log('User followed');
        },
        error: () => console.log('Cannot follow user'),
      });
    }
  }
}
