import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NbTransService } from '@bigbear713/nb-trans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransGuardService implements Resolve<boolean> {

  constructor(
    private transService: NbTransService,
  ) { }

  resolve(): Observable<boolean> {
    return this.transService.subscribeLoadDefaultOver();
  }

}
