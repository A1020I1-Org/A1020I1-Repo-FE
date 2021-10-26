import {
  AbstractControl, FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms'
import {OrderServiceComponent} from "./order-service/order-service.component";


export function limitQuantity(quantityOD: string, quantitySV: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control.get(quantityOD)?.value <= control.get(quantitySV)?.value) {
      return {"invalidPassword": true}
    }
    // @ts-ignore
    return null;
  };
}
