import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { User } from 'src/app/core/models/user';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  currentUser: User;
  endpoint: string = 'users';
  httpOptions: { params?: HttpParams } = {};

  userSearch: FormControl = new FormControl('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.currentUser = data.resolvedData.currentUser;
    });
    this.userSearch.valueChanges
      .pipe(
        map((inputUserName: string) => inputUserName.trim()),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((inputUserName) => {
        this.httpOptions = {
          ...this.httpOptions,
          params: inputUserName
            ? new HttpParams().set('name', inputUserName)
            : new HttpParams(),
        };
      });
  }
}
