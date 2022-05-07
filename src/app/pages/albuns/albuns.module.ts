import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';
import { DialogAlbumModule } from '@components/dialog/dialog-album/dialog-album.module';

@NgModule({
  declarations: [
    AlbunsComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    LoadingModule,
    AddButtonModule,
    OptionsMenuModule,
    DialogAlbumModule
  ]
})
export class AlbunsModule { }
