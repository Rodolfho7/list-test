import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlbumComponent } from '@components/dialog/dialog-album/dialog-album.component';
import { AlbumModel } from '@models/album.model';
import { AlbunsService } from '@services/api/albuns.service';
import { catchError, Observable, of } from 'rxjs';
import { take, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  albums$: Observable<AlbumModel[]> = of([]);
  albumError$: Observable<boolean> = of(false);

  constructor(
    private albumService: AlbunsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllAlbuns();
  }

  getAllAlbuns(): void {
    this.albums$ = this.albumService.getAll().pipe(
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
      tap(() => this.getAllAlbuns())
    ).subscribe();
  }

  addAlbum(): void {
    this.openDialog();
  }

  onEdit(album: AlbumModel): void {
    this.openDialog(album);
  }

  onRemove(albumId: number): void {
    this.albumService.removeAlbum(albumId);
  }
}
