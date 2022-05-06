import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { LoadingModule } from '@components/loading/loading.module';
import { MatCheckboxModule } from '@angular/material/checkbox'; 

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    LoadingModule,
    MatCheckboxModule
  ]
})
export class TodosModule { }
