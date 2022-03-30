import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadTransService } from './services/load-trans.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      transLoad: LoadTransService,
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./routes/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
