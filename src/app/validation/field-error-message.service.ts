import { InvalidFieldError } from './errors/invalid-field-error';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { RequiredFieldError } from './errors/required-field-error';

@Injectable({
  providedIn: 'root',
})
export class FieldErrorMessage {
  private errorMessage = {
    required: (params) => new RequiredFieldError().message,
    email: (params) => new InvalidFieldError().message,
  };

  message: string;

  getErrorMessage(controlName: AbstractControl) {
    const { errors } = controlName;
    if (errors && (controlName.touched || controlName.dirty)) {
      Object.keys(errors).map((error) => {
        this.message = this.errorMessage[error](controlName.errors[error]);
        return;
      });
      return this.message;
    }
  }
}
