import { ValidationError } from './validation.error';
export interface Validation {
  validate: (fieldName: string, fieldValue: string) => ValidationError;
}
