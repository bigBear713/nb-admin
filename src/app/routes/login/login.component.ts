import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { INbControlConfig, INbControlErrInfo, NbControlErrTypeEnum, NbFormService } from '@bigbear713/nb-form';
import { NbTransService } from '@bigbear713/nb-trans';
import { finalize } from 'rxjs/operators';
import { formConfigs } from './constants/form-configs';
import { FormProps } from './constants/form-props.enum';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  acctConfig: INbControlConfig = formConfigs[FormProps.ACCT];
  pwdConfig: INbControlConfig = formConfigs[FormProps.PWD];

  acctErrInfo: INbControlErrInfo = {
    [NbControlErrTypeEnum.REQUIRED]: this.nbTrans.translationAsync(this.acctConfig.placeholder || ''),
    [NbControlErrTypeEnum.WHITESPACE]: this.nbTrans.translationAsync(this.acctConfig.placeholder || ''),
  }
  pwdErrInfo: INbControlErrInfo = {
    [NbControlErrTypeEnum.REQUIRED]: this.nbTrans.translationAsync(this.pwdConfig.placeholder || ''),
    [NbControlErrTypeEnum.WHITESPACE]: this.nbTrans.translationAsync(this.pwdConfig.placeholder || ''),
  }

  get acctControl(): FormControl {
    return this.form.get(FormProps.ACCT) as FormControl;
  }

  get pwdControl(): FormControl {
    return this.form.get(FormProps.PWD) as FormControl;
  }

  constructor(
    private nbForm: NbFormService,
    private nbTrans: NbTransService,
    private service: LoginService,
  ) {
    this.form = this.service.buildForm();
  }

  ngOnInit() {
  }

  onLogin(): void {
    if (this.form.invalid) {
      this.nbForm.showAllErrInfo(this.form);
      return;
    }

    this.form.disable();
    this.service.login(this.form.getRawValue()).pipe(
      finalize(() => {
        this.form.enable();
      })
    ).subscribe()
  }

}
