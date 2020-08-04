import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatError(error: any) {
    return throwError(error.error);
  }

  private apiEndpoint(endpoint: string) {
    return `${environment.api}/${endpoint}`;
  }

  get(endpoint: string, options: Object = {}): Observable<any> {
    return this.http
      .get(this.apiEndpoint(endpoint), options)
      .pipe(retry(1), catchError(this.formatError));
  }

  post(
    endpoint: string,
    body: Object = {},
    options: Object = {}
  ): Observable<any> {
    return this.http
      .post(this.apiEndpoint(endpoint), body, options)
      .pipe(retry(1), catchError(this.formatError));
  }

  put(
    endpoint: string,
    body: Object = {},
    options: Object = {}
  ): Observable<any> {
    return this.http
      .put(this.apiEndpoint(endpoint), JSON.stringify(body), options)
      .pipe(retry(1), catchError(this.formatError));
  }

  delete(endpoint: string, options: Object = {}): Observable<any> {
    return this.http
      .delete(this.apiEndpoint(endpoint), options)
      .pipe(retry(1), catchError(this.formatError));
  }
}
