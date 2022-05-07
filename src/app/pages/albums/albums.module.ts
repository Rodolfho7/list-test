import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';
import { DialogAlbumModule } from '@components/dialog/dialog-album/dialog-album.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    LoadingModule,
    AddButtonModule,
    OptionsMenuModule,
    DialogAlbumModule,
    MatSnackBarModule
  ]
})
export class AlbumsModule { }
