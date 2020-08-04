import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-chunk-like-list',
  templateUrl: './chunk-like-list.component.html',
  styleUrls: ['./chunk-like-list.component.scss'],
})
export class ChunkLikeListComponent implements OnInit {
  currentUser: User;
  endpoint: string;
  httpOptions: Object = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.currentUser = data.resolvedData.currentUser;
    });
    this.route.paramMap.subscribe((params) => {
      this.endpoint = `chunks/${params.get('slug')}/like`;
    });
  }
}
