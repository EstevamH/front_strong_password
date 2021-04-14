import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserEntity } from '../../../entities/user-entity';

export abstract class IUserUseCase {
  abstract create(param: UserEntity): Observable<UserEntity>;
  abstract login(param: UserEntity): Observable<UserEntity>;
  abstract logout(): Observable<boolean>;
}
