import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagensComponent } from './postagens.component';
import { PostagensRoutingModule } from './postagens-routing.module';

@NgModule({
  declarations: [ PostagensComponent ],
  imports: [
    CommonModule,
    PostagensRoutingModule
  ]
})
export class PostagensModule { }
