import { NbTransLangEnum, NbTransService } from "@bigbear713/nb-trans";
import { langKey } from "@constants/lang-key";

export function getDefaultLang() {
  const language = localStorage.getItem(langKey) || NbTransService.getBrowserLang();
  return language === NbTransLangEnum.ZH_CN ? NbTransLangEnum.ZH_CN : NbTransLangEnum.EN
}