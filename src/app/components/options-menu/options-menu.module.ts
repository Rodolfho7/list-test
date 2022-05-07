import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsMenuComponent } from './options-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    OptionsMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    OptionsMenuComponent
  ]
})
export class OptionsMenuModule { }
