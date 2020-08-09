import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
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
