import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    const toUrl: string = route.path;
    return this.checkLogin(toUrl);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.auth.redirectUrl = url;
    return this.router.parseUrl('/portal/signup');
  }
}
