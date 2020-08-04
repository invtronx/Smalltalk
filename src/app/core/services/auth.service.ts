import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string = null;

  constructor(private api: ApiService, private jwt: JwtService) {}

  createUser(userInfo: Object): Observable<HttpResponse<any>> {
    return this.api.post('users', userInfo, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        this.jwt.saveToken(this.jwt.extractToken(response));
      })
    );
  }

  verifyUser(userInfo: Object): Observable<HttpResponse<any>> {
    return this.api.post('users/login', userInfo, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        this.jwt.saveToken(this.jwt.extractToken(response));
      })
    );
  }

  updateUser(userInfo: Object): Observable<HttpResponse<any>> {
    return this.api.put('users/me', userInfo, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        this.jwt.saveToken(this.jwt.extractToken(response));
      })
    );
  }

  isLoggedIn(): boolean {
    return this.jwt.getToken() != null;
  }
}
