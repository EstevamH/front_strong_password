import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

import { FieldErrorMessage } from './../../../../../validation/field-error-message.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input('t-control') _control: FormControl;
  @Input('t-label') _label: string = '';
  @Input('t-type') _type: string = '';

  constructor(private _fieldErrorMessage: FieldErrorMessage) {}

  get label() {
    return this._label;
  }

  get type() {
    return this._type;
  }

  get control() {
    return this._control;
  }

  getErrorMessage(control: AbstractControl) {
    return this._fieldErrorMessage.getErrorMessage(control);
  }
}
