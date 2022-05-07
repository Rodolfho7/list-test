import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTodoComponent } from '@components/dialog/dialog-todo/dialog-todo.component';
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

  constructor(
    private todosService: TodosService,
    private dialog: MatDialog
  ) { }

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
    this.dialog.open(DialogTodoComponent, {
      width: '500px'
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.getAllTodos();
      }
    });
  }

  onEdit(post: TodoModel): void {

  }

  onRemove(post: TodoModel): void {

  }
}
