import { Observable } from 'rxjs';
export abstract class IUserUseCase {
  abstract create(param: any): Observable<any>;
  abstract login(param: any): Observable<any>;
  abstract logout(): Observable<boolean>;
}
