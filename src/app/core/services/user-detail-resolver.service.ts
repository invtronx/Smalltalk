import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailResolverService implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const username = route.paramMap.get('username');
    return zip(
      this.api.get('users/me'),
      this.api.get(`users/${username}`)
    ).pipe(map(([currentUser, user]) => ({ currentUser, user })));
  }
}
