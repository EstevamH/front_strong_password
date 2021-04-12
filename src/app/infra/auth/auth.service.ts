import { Injectable } from '@angular/core';

const CREDENTIALS = 'strongPass';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any;

  constructor() {
    const savedCredentials =
      sessionStorage.getItem(CREDENTIALS) || localStorage.getItem(CREDENTIALS);

    if (savedCredentials) {
      this.user = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials() {
    return this.user;
  }

  setCredentials(user: any) {
    this.user = user || null;

    if (user) {
      localStorage.setItem(CREDENTIALS, JSON.stringify(user));
    } else {
      localStorage.removeItem(CREDENTIALS);
    }
  }
}
