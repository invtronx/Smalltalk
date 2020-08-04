import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ChunkDetailResolverService implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const slug = route.paramMap.get('slug');
    return zip(
      this.api.get(`chunks/${slug}`),
      this.api.get(`chunks/${slug}/comment`),
      this.api.get(`chunks/${slug}/like`),
      this.api.get('users/me')
    ).pipe(
      map(([chunk, comments, likes, currentUser]) => ({
        chunk,
        comments,
        likes,
        currentUser,
      }))
    );
  }
}
