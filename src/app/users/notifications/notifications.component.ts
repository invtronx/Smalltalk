import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Notification } from 'src/app/core/models/notification';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: BehaviorSubject<Notification> = new BehaviorSubject<
    Notification
  >(null);
  notifications$: Observable<Notification> = this.notifications.asObservable();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('notifications').subscribe((data) => {
      this.notifications.next(data.notifications);
    });
  }
}
