import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from './pages/pages.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainModule, PagesModule],
  exports: [PagesModule],
})
export class ViewModule {}
