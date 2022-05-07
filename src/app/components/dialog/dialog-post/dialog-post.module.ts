import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogPostComponent } from './dialog-post.component';
import { DialogTemplateModule } from '@components/dialog/dialog-template/dialog-template.module';

@NgModule({
  declarations: [
    DialogPostComponent
  ],
  imports: [
    CommonModule,
    DialogTemplateModule
  ]
})
export class DialogPostModule { }
