import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';
export abstract class IUserRepository {
  abstract create(user: UserEntity): Observable<UserEntity>;
  abstract login(user: UserEntity): Observable<UserEntity>;
}
