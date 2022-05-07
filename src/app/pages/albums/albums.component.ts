import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAlbumComponent } from '@components/dialog/dialog-album/dialog-album.component';
import { AlbumModel } from '@models/album.model';
import { AlbumsService } from '@services/api/albums/albums.service';
import { catchError, Observable, of } from 'rxjs';
import { take, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<AlbumModel[]> = of([]);
  albumError$: Observable<boolean> = of(false);

  constructor(
    private albumsService: AlbumsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  itemTracked(index: number, album: AlbumModel) {
    return album.id;
  }

  getAllAlbums(): void {
    this.albums$ = this.albumsService.getAll().pipe(
      catchError(() => {
        this.albumError$ = of(true);
        return of([]);
      })
    );
  }

  openDialog(data: AlbumModel | null = null): void {
    this.dialog.open(DialogAlbumComponent, {
      width: '500px',
      data
    }).afterClosed().pipe(
      take(1),
      filter((save) => save),
      tap(() => this.snackBarMessage('Album criado/atualizado com sucesso!')),
      tap(() => this.getAllAlbums())
    ).subscribe();
  }

  addAlbum(): void {
    this.openDialog();
  }

  onEdit(album: AlbumModel): void {
    this.openDialog(album);
  }

  onRemove(albumId: number): void {
    this.albumsService.removeAlbum(albumId).pipe(
      take(1),
      tap(() => this.snackBarMessage('Album removido')),
      tap(() => this.getAllAlbums())
    ).subscribe();
  }

  snackBarMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
