import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlbunsService } from '@services/api/albuns.service';
import { Observable, catchError, of } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-album',
  templateUrl: './dialog-album.component.html',
  styleUrls: ['./dialog-album.component.scss']
})
export class DialogAlbumComponent {

  album: FormGroup;
  loading = false;
  albumObservable: Observable<any> | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private albunsService: AlbunsService
  ) {
    this.album = this.fb.group({
      title: [this.data?.title, Validators.required]
    });
  }

  closeDialog(save: boolean): void {
    if (!save) {
      this.dialogRef.close(save);
      return;
    }

    this.loading = true;

    let albumData = {
      ...this.data,
      ...this.album.value
    };

    if (!this.data?.id) {
      albumData = { ...albumData, userId: 1 };
      this.albumObservable = this.albunsService.createAlbum(albumData);
    } else {
      this.albumObservable = this.albunsService.updateAlbum(albumData);
    }

    this.albumObservable.pipe(
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
