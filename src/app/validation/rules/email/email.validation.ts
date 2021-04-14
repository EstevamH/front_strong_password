import { FieldValidation } from '../../../domain/interfaces/validation/field-validation';
import { InvalidFieldError } from '../../errors/invalid-field-error';

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return !value || emailRegex.test(value)
      ? null
      : new InvalidFieldError('email');
  }
}
