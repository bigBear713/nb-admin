import { FormProps } from "../constants/form-props.enum";

export interface IFormValue {
  [FormProps.ACCT]: string;
  [FormProps.PWD]: string;
}
