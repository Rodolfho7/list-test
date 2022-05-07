import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-album',
  templateUrl: './dialog-album.component.html',
  styleUrls: ['./dialog-album.component.scss']
})
export class DialogAlbumComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(save: boolean): void {
    this.dialogRef.close(save);
  }
}
