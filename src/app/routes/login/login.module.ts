import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NbFormModule } from '@bigbear713/nb-form';
import { NbTransModule } from '@bigbear713/nb-trans';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NbCommonModule } from '@bigbear713/nb-common';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

const NB_LIBS = [NbCommonModule, NbFormModule, NbTransModule];
const NZ_LIBS = [
  NzButtonModule,
  NzCardModule,
  NzInputModule,
  NzMessageModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...NB_LIBS,
    ...NZ_LIBS,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
