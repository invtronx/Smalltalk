import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  HostListener,
} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from 'src/app/core/models/user';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-user-list-generator',
  templateUrl: './user-list-generator.component.html',
  styleUrls: ['./user-list-generator.component.scss'],
})
export class UserListGeneratorComponent implements OnInit, OnChanges {
  @Input() currentUser: User;
  @Input() endpoint: string;
  @Input() httpOptions: { params?: any } | null;
  @Input() ignoreSelf: boolean | null;

  usersList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersListExhausted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  usersList$: Observable<User[]> = this.usersList.asObservable();
  usersListExhausted$: Observable<
    boolean
  > = this.usersListExhausted.asObservable();

  bufferCount: number = 20;
  offset: number = 0;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const httpOptionsChange: SimpleChange = changes.httpOptions;
    if (httpOptionsChange && !httpOptionsChange.firstChange) {
      this.httpOptions = httpOptionsChange.currentValue;
      this.bufferUsersList(true);
    }
  }

  ngOnInit(): void {
    this.ignoreSelf = this.ignoreSelf === undefined ? true : false;
    this.httpOptions = this.httpOptions || {};
    this.httpOptions.params = this.httpOptions?.hasOwnProperty('params')
      ? this.httpOptions.params
      : new HttpParams();
    this.setHttpLimitAndOffset();
    this.bufferUsersList();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      document.body.scrollHeight - (window.innerHeight + window.scrollY) <=
        128 &&
      !this.usersListExhausted.value
    ) {
      this.bufferUsersList();
    }
  }

  setHttpLimitAndOffset(): void {
    this.httpOptions.params = this.httpOptions.params
      .set('limit', `${this.bufferCount}`)
      .set('offset', `${this.offset}`);
  }

  bufferUsersList(reset: boolean = false): void {
    if (this.usersListExhausted.value && !reset) {
      return;
    }
    this.offset = reset ? 0 : this.offset;
    this.api.get(this.endpoint, this.httpOptions).subscribe({
      next: (data) => {
        this.usersList.next(
          reset ? data.users : this.usersList.value.concat(data.users)
        );
        this.offset = this.offset + this.bufferCount;
        this.setHttpLimitAndOffset();
        this.usersListExhausted.next(this.offset >= data.userCount);
      },
      error: console.log,
    });
  }
}
