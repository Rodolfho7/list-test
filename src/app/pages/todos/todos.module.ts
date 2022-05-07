import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingModule } from '@components/loading/loading.module';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';
import { DialogTodoModule } from '@components/dialog/dialog-todo/dialog-todo.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    LoadingModule,
    MatCheckboxModule,
    AddButtonModule,
    OptionsMenuModule,
    DialogTodoModule,
    MatSnackBarModule
  ]
})
export class TodosModule { }
