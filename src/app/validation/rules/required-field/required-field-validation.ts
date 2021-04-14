import { FieldValidation } from '../../../domain/interfaces/validation/field-validation';
import { RequiredFieldError } from '../../errors/required-field-error';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return value ? null : new RequiredFieldError();
  }
}
