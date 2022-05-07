import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.scss']
})
export class DialogPostComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(save: boolean): void {
    this.dialogRef.close(save);
  }
}
