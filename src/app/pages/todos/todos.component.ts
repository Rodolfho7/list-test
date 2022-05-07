import { Component, OnInit } from '@angular/core';
import { TodoModel } from '@models/to-do.model';
import { TodosService } from '@services/api/todos.service';
import { catchError, Observable, of } from 'rxjs';

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
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.todos$ = this.todosService.getAll().pipe(
      catchError(() => {
        this.todosError$ = of(true);
        return of([]);
      })
    );
  }

  addTodo(): void {
    console.log('add todo clicked');
  }

  onEdit(post: TodoModel): void {

  }

  onRemove(post: TodoModel): void {

  }
}
