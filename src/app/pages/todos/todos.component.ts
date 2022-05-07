import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogTodoComponent } from '@components/dialog/dialog-todo/dialog-todo.component';
import { TodoModel } from '@models/to-do.model';
import { TodosService } from '@services/api/todo/todos.service';
import { catchError, Observable, of } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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

  openDialog(data: TodoModel | null = null): void {
    this.dialog.open(DialogTodoComponent, {
      width: '500px',
      data
    }).afterClosed().pipe(
      take(1),
      filter((save) => save),
      tap(() => this.snackBarMessage('To-do criado/atualizado com sucesso!')),
      tap(() => this.getAllTodos())
    ).subscribe();
  }

  addTodo(): void {
    this.openDialog();
  }

  onEdit(todo: TodoModel): void {
    this.openDialog(todo);
  }

  onRemove(todoId: number): void {
    this.todosService.removeTodo(todoId).pipe(
      take(1),
      tap(() => this.snackBarMessage('To-do removido')),
      tap(() => this.getAllTodos())
    ).subscribe();
  }

  snackBarMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
