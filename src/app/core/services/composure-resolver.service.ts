import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { zip, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ComposureResolverService implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sharedSourceSlug = route.queryParamMap.get('sharedSlug') || null;
    const chunkSlug = route.queryParamMap.get('currentSlug') || null;
    return zip(
      sharedSourceSlug ? this.api.get(`chunks/${sharedSourceSlug}`) : of(null),
      chunkSlug ? this.api.get(`chunks/${chunkSlug}`) : of(null)
    ).pipe(
      map(([sharedSource, chunk]) => ({
        sharedSource,
        chunk,
      }))
    );
  }
}
