import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: User;
  currentUser: User;
  canModify: boolean;
  endpoint: string = 'chunks';
  httpOptions: Object;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.user =
        data.resolvedData.user?.user || data.resolvedData.user?.currentUser;
      this.currentUser = data.resolvedData.currentUser.currentUser;
      this.canModify = this.currentUser.username === this.user.username;
      this.httpOptions = {
        params: new HttpParams().set('author', this.user.username),
      };
    });
  }
}
