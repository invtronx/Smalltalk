import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(
    private jwt: JwtService,
    private router: Router,
    private loc: Location
  ) {}

  handleLogout(): void {
    this.jwt.clearToken();
    this.router.navigate(['/portal/login']);
  }

  back(): void {
    this.loc.back();
  }
}
