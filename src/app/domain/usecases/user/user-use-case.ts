import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';

import { IUserUseCase } from '../../interfaces/usecases/user/iuser-use-case';

@Injectable({
  providedIn: 'root',
})
export class UsuarioUseCase implements IUserUseCase {
  create(param: UserEntity): Observable<UserEntity> {
    throw new Error('Method not implemented.');
  }
  login(param: UserEntity): Observable<UserEntity> {
    throw new Error('Method not implemented.');
  }
  logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
