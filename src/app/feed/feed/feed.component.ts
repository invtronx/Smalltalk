import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { User } from 'src/app/core/models/user';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  currentUser: User;
  endpoint: string = 'chunks';
  httpOptions: { params?: HttpParams } = {};

  tagSearch: FormControl = new FormControl('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.currentUser = data.resolvedData.currentUser;
    });
    this.tagSearch.valueChanges
      .pipe(
        map((inputTagString: string) => inputTagString.trim()),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((inputTagString) => {
        const tags: string[] = inputTagString
          .split(/\s/)
          .map((tag: string) => (tag[0] === '#' ? tag.slice(1) : tag));
        this.httpOptions = {
          ...this.httpOptions,
          params:
            tags.length > 0
              ? new HttpParams().set('tags', tags.join(','))
              : new HttpParams(),
        };
      });
  }
}
