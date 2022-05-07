import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagensComponent } from './postagens.component';
import { PostagensRoutingModule } from './postagens-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';

@NgModule({
  declarations: [ PostagensComponent ],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    LoadingModule,
    AddButtonModule,
    OptionsMenuModule
  ]
})
export class PostagensModule { }
