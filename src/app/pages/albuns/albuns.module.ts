import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';

@NgModule({
  declarations: [
    AlbunsComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    LoadingModule,
    AddButtonModule
  ]
})
export class AlbunsModule { }
