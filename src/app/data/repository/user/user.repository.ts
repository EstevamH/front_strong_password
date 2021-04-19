import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IUserRepository } from './../../../domain/interfaces/repository/iuser-repository';

@Injectable({ providedIn: 'root' })
export class UserRepository implements IUserRepository {
  readonly BASE_URL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  create(user: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, user);
  }

  login(user: any): Observable<any> {
    let params = new HttpParams()
      .append('email', user.email)
      .append('password', user.password);

    return this.http.get(`${this.BASE_URL}`, { params });
  }
}
