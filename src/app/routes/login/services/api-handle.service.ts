import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFormValue } from '../models/form-value.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiHandleService {

  constructor() { }

  login(formValue: IFormValue): Observable<boolean> {
    const { account, password } = formValue;
    const result = account.trim() === 'nb-admin' && password?.trim() === '123456';
    return of(result);
  }

}
