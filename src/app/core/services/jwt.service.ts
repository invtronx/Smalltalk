import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  extractToken(response: HttpResponse<any>): string {
    return response.body.currentUser['token'];
  }

  getToken(): string {
    return window.localStorage.getItem('token');
  }

  saveToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  clearToken(): void {
    window.localStorage.removeItem('token');
  }
}
