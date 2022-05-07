import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddButtonModule } from '@components/add-button/add-button.module';
import { OptionsMenuModule } from '@components/options-menu/options-menu.module';

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
    OptionsMenuModule
  ]
})
export class TodosModule { }
