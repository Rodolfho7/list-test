import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTodoComponent } from './dialog-todo.component';
import { DialogTemplateModule } from '@components/dialog/dialog-template/dialog-template.module';

@NgModule({
  declarations: [
    DialogTodoComponent
  ],
  imports: [
    CommonModule,
    DialogTemplateModule
  ]
})
export class DialogTodoModule { }
