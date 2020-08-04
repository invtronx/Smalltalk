import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FetchCurrentUserService implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('users/me');
  }
}
