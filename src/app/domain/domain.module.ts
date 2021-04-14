import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IUserUseCase } from './interfaces/usecases/user/iuser-use-case';
import { UserUseCase } from './usecases/user/user-use-case';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: IUserUseCase, useClass: UserUseCase }],
})
export class DomainModule {}
