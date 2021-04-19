import { Injectable } from '@angular/core';

import { ValidationError } from '../../../interfaces/validation/validation.error';
import { ValidationComposite } from '../../../../validation/validation-composite/validation-composite';
import { ValidationBuilder } from '../../../../validation/builder/validation-builder';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginFormValidatorService {
  private _errors: ValidationError[] = [];
  private _form: FormGroup;

  constructor() {}

  isValidFields(param: any): ValidationError[] {
    Object.keys(param).forEach((item) => {
      let error = this.rules().validate(item, param[item]);
      if (error) {
        this._errors.push(error);
      }
    });
    this.setFormValidation(this._errors);
    return this._errors;
  }

  private setFormValidation(errors: ValidationError[]): void {
    Object.keys(this._form.controls).forEach((field) => {
      let error = errors.filter((e) => e.field === field)[0];
      if (error) {
        let control = this._form.get(field);
        let validation = error.errorName;
        control.setErrors({ [validation]: true });
      }
    });
  }

  setForm(form: FormGroup): void {
    this._form = form;
  }

  private rules(): ValidationComposite {
    return ValidationComposite.build([
      ...ValidationBuilder.field('email').required().build(),
      ...ValidationBuilder.field('password').required().build(),
    ]);
  }
}
