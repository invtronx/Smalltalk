import { Component, Input } from '@angular/core';

import { Notification } from 'src/app/core/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() notification: Notification;

  constructor() {}

  get parseNotificationObject(): string {
    return `${
      this.notification.userAgent.name
    } ${this.notification.action.toLowerCase()}${
      this.notification.action === 'Like' ? 'd' : 'ed'
    } ${this.notification.action === 'Follow' ? 'you' : 'your post'}`;
  }

  get formatNotificationTime(): string {
    const dateObject: any = new Date(this.notification.time);
    const now: any = new Date();
    const secondsElapsed: number = (now - dateObject) / 1000;

    const minutesElapsed: number = Math.round(secondsElapsed / 60);
    const hoursElapsed: number = Math.round(minutesElapsed / 60);
    const daysElapsed: number = Math.floor(hoursElapsed / 24);
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
