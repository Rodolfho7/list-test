import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';

@NgModule({
  declarations: [
    AlbunsComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule
  ]
})
export class AlbunsModule { }
