import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IUserRepository } from '../../interfaces/repository/iuser-repository';
import { IUserUseCase } from '../../interfaces/usecases/user/iuser-use-case';
import { LoginFormValidatorService } from './validation/user-login-form-validator.service';

@Injectable({
  providedIn: 'root',
})
export class UserUseCase implements IUserUseCase {
  private _validForm: boolean;

  constructor(
    private userRepository: IUserRepository,
    private userLoginValidate: LoginFormValidatorService
  ) {}

  create(param: any): Observable<any> {
    const errors = this.userLoginValidate.isValidFields(param);
    if (errors.length == 0) {
      return this.userRepository.create(param);
    } else {
      return throwError('Formulário Inválido');
    }
  }

  login(param: any): Observable<any> {
    return this.userRepository.login(param);
  }

  logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
