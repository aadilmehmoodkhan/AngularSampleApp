import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../model/LoginPayload';

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

  getLoginPayload(): Observable<LoginPayload> {
    return this.http.get<LoginPayload>(this.getApiMethodLink("loginPayload"));
  }
}
