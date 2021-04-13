import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { AppMaterialModule } from '../../../app-material.module';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
})
export class SharedModule {}
