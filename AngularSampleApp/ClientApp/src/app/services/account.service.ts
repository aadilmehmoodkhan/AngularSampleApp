import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
  }

  private getApiMethodLink(method: string): string {
    return `${config.services.basePath}/account/${method}`;
  }

  healthCheck() : Observable<object> {
    return this.http.get(this.getApiMethodLink("hc"));
  }

  getUserName(): Observable<any> {
    return this.http.get<any>(this.getApiMethodLink("getUserName"));
  }
}
