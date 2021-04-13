import { DomainEntity } from './base/domain-entity';
export class UserEntity extends DomainEntity {
  name?: string = null;
  password?: string = null;
  email?: string = null;
}
