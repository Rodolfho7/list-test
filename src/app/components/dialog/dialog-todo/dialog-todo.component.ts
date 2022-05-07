import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodosService } from '@services/api/todo/todos.service';
import { Observable, of } from 'rxjs';
import { take, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-todo',
  templateUrl: './dialog-todo.component.html',
  styleUrls: ['./dialog-todo.component.scss']
})
export class DialogTodoComponent {

  todo: FormGroup;
  loading = false;
  todoObservable: Observable<any> | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private todosService: TodosService
  ) {
    this.todo = this.fb.group({
      title: [this.data?.title, Validators.required],
      completed: [this.data?.completed || false],
    });
  }

  closeDialog(save: boolean): void {
    if (!save) {
      this.dialogRef.close(save);
      return;
    }

    this.loading = true;

    let todoData = {
      ...this.data,
      ...this.todo.value
    };

    if (!this.data?.id) {
      todoData = { ...todoData, userId: 1 };
      this.todoObservable = this.todosService.createTodo(todoData);
    } else {
      this.todoObservable = this.todosService.updateTodo(todoData);
    }

    this.todoObservable.pipe(
      take(1),
      tap(() => this.loading = false),
      tap((response) => this.dialogRef.close(response)),
      catchError(() => {
        this.loading = false;
        return of(null);
      })
    ).subscribe();
  }
}
