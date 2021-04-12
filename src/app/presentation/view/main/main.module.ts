import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule, AppMaterialModule],
})
export class MainModule {}
