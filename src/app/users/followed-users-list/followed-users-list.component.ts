import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-followed-users-list',
  templateUrl: './followed-users-list.component.html',
  styleUrls: ['./followed-users-list.component.scss'],
})
export class FollowedUsersListComponent implements OnInit {
  user: User;
  endpoint: string = 'users';
  httpOptions: { params?: HttpParams };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.user =
        data.resolvedData.user?.user || data.resolvedData.user?.currentUser;
      this.httpOptions = {
        params: new HttpParams().set('followersOf', this.user.username),
      };
    });
  }
}
