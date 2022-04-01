import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginManagerService } from '@utils/login-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private loginManager: LoginManagerService,
    private router: Router,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginManager.shouldLogin()) {
      this.loginManager.setRedirectUrl(state.url);
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
