import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginManagerService } from '@utils/login-manager.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class PagesService {

  constructor(
    private loginManager: LoginManagerService,
    private router: Router,
  ) { }

  logout(): Observable<boolean> {
    this.loginManager.setAsLogout();
    this.router.navigate(['/login']);
    console.log(12);

    return of(true);
  }

}
