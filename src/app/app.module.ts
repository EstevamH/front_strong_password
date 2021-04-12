import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { DataModule } from './data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    DataModule,
    PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
