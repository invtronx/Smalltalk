import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { Chunk } from 'src/app/core/models/chunk';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-feed-generator',
  templateUrl: './feed-generator.component.html',
  styleUrls: ['./feed-generator.component.scss'],
})
export class FeedGeneratorComponent implements OnInit, OnChanges {
  @Input() currentUser: User;
  @Input() endpoint: string;
  @Input() httpOptions: { params?: any } | null;

  feed: BehaviorSubject<Chunk[]> = new BehaviorSubject<Chunk[]>([]);
  feedExhausted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  feed$: Observable<Chunk[]> = this.feed.asObservable();
  feedExhausted$: Observable<boolean> = this.feedExhausted.asObservable();

  bufferCount: number = 20;
  offset: number = 0;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const httpOptionsChange: SimpleChange = changes.httpOptions;
    if (httpOptionsChange && !httpOptionsChange.firstChange) {
      this.httpOptions = httpOptionsChange.currentValue;
      this.bufferFeed(true);
    }
  }

  ngOnInit(): void {
    this.httpOptions = this.httpOptions || {};
    this.httpOptions.params = this.httpOptions?.hasOwnProperty('params')
      ? this.httpOptions.params
      : new HttpParams();
    this.setHttpLimitAndOffset();
    this.bufferFeed();
  }

  setHttpLimitAndOffset(): void {
    this.httpOptions.params = this.httpOptions.params
      .set('limit', `${this.bufferCount}`)
      .set('offset', `${this.offset}`);
  }

  bufferFeed(reset: boolean = false): void {
    if (this.feedExhausted.value && !reset) {
      return;
    }
    this.offset = reset ? 0 : this.offset;
    this.api.get(this.endpoint, this.httpOptions).subscribe({
      next: (data) => {
        this.feed.next(
          reset ? data.chunks : this.feed.value.concat(data.chunks)
        );
        this.offset = this.offset + this.bufferCount;
        this.setHttpLimitAndOffset();
        this.feedExhausted.next(this.offset >= data.chunkCount);
      },
      error: console.log,
    });
  }
}
