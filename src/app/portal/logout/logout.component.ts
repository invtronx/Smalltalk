import { Component } from '@angular/core';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private jwt: JwtService, private router: Router) {}

  handleLogout(): void {
    this.jwt.clearToken();
    this.router.navigate(['/portal']);
  }
}
