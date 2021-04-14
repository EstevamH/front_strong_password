import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';
import { UserControllerService } from './controller/user/user-controller.service';
import { IUserController } from '../domain/interfaces/controllers/user/iuser-controller';

@NgModule({
  declarations: [],
  imports: [CommonModule, ViewModule],
  exports: [ViewModule],
  providers: [{ provide: IUserController, useClass: UserControllerService }],
})
export class PresentationModule {}
