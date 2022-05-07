import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTemplateModule } from '../dialog-template/dialog-template.module';
import { DialogAlbumComponent } from './dialog-album.component';

@NgModule({
  declarations: [
    DialogAlbumComponent
  ],
  imports: [
    CommonModule,
    DialogTemplateModule
  ]
})
export class DialogAlbumModule { }
