import { Injectable } from '@angular/core';

const isLoginkey: string = 'isLogin';
@Injectable({
  providedIn: 'root'
})
export class LoginManagerService {

  private redirectUrl: string = '/';

  constructor() { }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(redirectUrl: string): void {
    this.redirectUrl = redirectUrl;
  }

  shouldLogin(): boolean {
    // TODO: you can do something to check if you are logged in
    return localStorage.getItem(isLoginkey) !== 'true';
  }

  setAsLogin(): void {
    localStorage.setItem(isLoginkey, 'true');
  }

  setAsLogout(): void {
    localStorage.removeItem(isLoginkey);
    this.redirectUrl = '/';
  }

}
