import { Injectable } from '@angular/core';

import { IUserController } from '../../../domain/interfaces/controllers/user/iuser-controller';
import { UserEntity } from '../../../domain/entities/user-entity';
import { Observable } from 'rxjs';
import { IUserUseCase } from 'src/app/domain/interfaces/usecases/user/iuser-use-case';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService implements IUserController {
  constructor(private userUseCase: IUserUseCase) {}

  create(param: UserEntity): Observable<UserEntity> {
    return this.userUseCase.create(param);
  }

  login(param: UserEntity): Observable<UserEntity> {
    return this.userUseCase.login(param);
  }

  logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
