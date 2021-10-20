import {IUserName} from "../interface/IUserName";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function validUserNameValidators(arr: IUserName[], userName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    let check = false;
    for (let i of arr) {
      console.log(i.userName)
      if (i.userName == control.get(userName)?.value) {
        check =true;
      }
    }
    if (check) {
      return {'invalidUser': true};
    }
    // @ts-ignore
    return null;
  }
}
