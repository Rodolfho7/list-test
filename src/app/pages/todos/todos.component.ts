import { Component, OnInit } from '@angular/core';
import { TodoModel } from '@models/to-do.model';
import { TodosService } from '@services/api/todos.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<TodoModel[]> = of([]);
  todosError$: Observable<boolean> = of(false);

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos$ = this.todosService.getAll();
  }

  addTodo(): void {
    console.log('add todo clicked');
  }
}
