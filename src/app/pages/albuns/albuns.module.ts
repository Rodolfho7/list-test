import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { DialogModule } from '@components/dialog/dialog.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';

@NgModule({
  declarations: [
    AlbunsComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    LoadingModule,
    AddButtonModule,
    DialogModule,
    OptionsMenuModule
  ]
})
export class AlbunsModule { }
