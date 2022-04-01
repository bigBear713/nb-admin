import { INbFormConfigs } from "@bigbear713/nb-form";
import { FormProps } from "./form-props.enum";

export const formConfigs: INbFormConfigs = {
  [FormProps.ACCT]: {
    required: true,
    whitespace: false,
    initValue: null,
    placeholder: 'login.acctRequired',
  },
  [FormProps.PWD]: {
    required: true,
    whitespace: false,
    initValue: null,
    placeholder: 'login.pwdRequired',
  },
}