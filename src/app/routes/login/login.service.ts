import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbFormService } from '@bigbear713/nb-form';
import { NbTransService } from '@bigbear713/nb-trans';
import { LoginManagerService } from '@utils/login-manager.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { formConfigs } from './constants/form-configs';
import { FormProps } from './constants/form-props.enum';
import { IFormValue } from './models/form-value.interface';
import { ApiHandleService } from './services/api-handle.service';

@Injectable()
export class LoginService {

  constructor(
    private apiHandle: ApiHandleService,
    private fb: FormBuilder,
    private loginManager: LoginManagerService,
    private nbForm: NbFormService,
    private nbTrans: NbTransService,
    private nzMessage: NzMessageService,
    private router: Router,
  ) { }

  buildForm(): FormGroup {
    const acctConfig = formConfigs[FormProps.ACCT];
    const pwdConfig = formConfigs[FormProps.PWD];
    return this.fb.group({
      [FormProps.ACCT]: [acctConfig.initValue, this.nbForm.getValidatorsFromControlConfig(acctConfig)],
      [FormProps.PWD]: [pwdConfig.initValue, this.nbForm.getValidatorsFromControlConfig(pwdConfig)],
    });
  }

  login(formValue: IFormValue): Observable<boolean> {
    return this.apiHandle.login(formValue).pipe(
      tap(result => result && this.loginManager.setAsLogin()),
      tap(result => result && this.nzMessage.success(
        this.nbTrans.translationSync('login.success')
      )),
      tap(result => result && this.router.navigate([this.loginManager.getRedirectUrl()])),
    );
  }


}
