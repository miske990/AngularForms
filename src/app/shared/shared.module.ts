import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AngularMaterialModule,
    RouterModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    AngularMaterialModule

  ],
  providers: [
  ]
})

export class SharedModule {
}