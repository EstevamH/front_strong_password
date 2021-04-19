import { Observable } from 'rxjs';
export abstract class IUserRepository {
  abstract create(user: any): Observable<any>;
  abstract login(user: any): Observable<any>;
}
