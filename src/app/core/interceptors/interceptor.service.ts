import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { JwtService } from '../services/jwt.service';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private jwt: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const authToken = this.jwt.getToken();
    if (authToken) {
      authHeaders['Authorization'] = `Bearer ${authToken}`;
    }

    const authReq = req.clone({ setHeaders: authHeaders });
    return next.handle(authReq);
  }
}
