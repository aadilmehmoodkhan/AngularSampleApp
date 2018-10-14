import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {
  }

  private serviceBase(): string {
    return `${config.services.basePath}/test`;
  }

  healthCheck() : Observable<object> {
    return this.http.get(`${this.serviceBase()}/hc`);
  }
}
