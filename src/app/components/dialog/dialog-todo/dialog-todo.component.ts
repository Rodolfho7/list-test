import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-todo',
  templateUrl: './dialog-todo.component.html',
  styleUrls: ['./dialog-todo.component.scss']
})
export class DialogTodoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(save: boolean): void {
    this.dialogRef.close(save);
  }
}
