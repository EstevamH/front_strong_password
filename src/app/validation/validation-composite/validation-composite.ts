import { ValidationError } from './../../domain/interfaces/validation/validation.error';
import { Validation } from '../../domain/interfaces/validation/validation';
import { FieldValidation } from '../../domain/interfaces/validation/field-validation';

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators);
  }

  validate(fieldName: string, fieldValue: string): ValidationError {
    const validators = this.validators.filter((v) => v.field === fieldName);
    for (const validator of validators) {
      const error = validator.validate(fieldValue);
      if (error) {
        return {
          field: fieldName,
          errorName: error.name,
        };
      }
    }
  }
}
