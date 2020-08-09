import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' },
  ],
})
export class AppComponent {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.progressLoaderInterceptor(event);
    });
  }

  progressLoaderInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading$.next(true);
    } else if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.isLoading$.next(false);
    }
  }
}
