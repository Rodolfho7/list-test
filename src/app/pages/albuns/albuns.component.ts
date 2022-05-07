import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlbumComponent } from '@components/dialog/dialog-album/dialog-album.component';
import { AlbumModel } from '@models/album.model';
import { AlbunsService } from '@services/api/albuns.service';
import { catchError, Observable, of } from 'rxjs';

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

  addAlbum(): void {
    this.dialog.open(DialogAlbumComponent, {
      width: '500px'
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.getAllAlbuns();
      }
    });
  }

  onEdit(album: AlbumModel): void {
    console.log(album);
  }

  onRemove(album: AlbumModel): void {
    console.log(album);
  }

}
