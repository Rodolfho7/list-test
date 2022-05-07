import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTemplateComponent } from './dialog-template.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DialogTemplateComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogTemplateComponent
  ]
})
export class DialogTemplateModule { }
