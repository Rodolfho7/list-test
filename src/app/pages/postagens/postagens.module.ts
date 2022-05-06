import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagensComponent } from './postagens.component';
import { PostagensRoutingModule } from './postagens-routing.module';
import { LoadingModule } from '@components/loading/loading.module';

@NgModule({
  declarations: [ PostagensComponent ],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    LoadingModule
  ]
})
export class PostagensModule { }
