import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FieldErrorMessage {
  private errorMessage = {
    required: (params) => `Campo Obrigatório`,
    email: (params) => `Email inválido`,
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
