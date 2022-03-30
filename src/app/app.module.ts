import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbTransLangEnum, NB_TRANS_DEFAULT_LANG, NB_TRANS_LOADER } from '@bigbear713/nb-trans';
import { getDefaultLang } from '@utils/get-default-lang';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NB_TRANS_DEFAULT_LANG, useValue: getDefaultLang() },
    {
      provide: NB_TRANS_LOADER,
      useFactory: (httpBackend: HttpBackend) => {
        const http = new HttpClient(httpBackend);
        return {
          [NbTransLangEnum.ZH_CN]: () => http.get('./assets/localization/zh-CN/translations.json'),
          [NbTransLangEnum.EN]: () => http.get('./assets/localization/en/translations.json'),
        }
      },
      deps: [HttpBackend]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


