import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IUserRepository } from '../domain/interfaces/repository/iuser-repository';
import { UserRepository } from './repository/user/user.repository';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
})
export class DataModule {}
