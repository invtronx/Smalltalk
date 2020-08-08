import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-backbar',
  templateUrl: './backbar.component.html',
  styleUrls: ['./backbar.component.scss'],
})
export class BackbarComponent {
  @Input() caption: string;

  constructor(private loc: Location) {}

  returnToPreviousPage(): void {
    this.loc.back();
  }
}
