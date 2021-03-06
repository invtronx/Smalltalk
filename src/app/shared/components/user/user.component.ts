import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;

  isSmallScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(max-width: 1320px)')
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen$.next(state.matches);
      });
  }
}
