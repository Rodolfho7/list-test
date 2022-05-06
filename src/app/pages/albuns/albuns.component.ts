import { Component, OnInit } from '@angular/core';
import { Album } from '@models/album.model';
import { AlbunsService } from '@services/api/albuns.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  albums$: Observable<Album[]> = of([]);
  albumError$: Observable<boolean> = of(false);

  constructor(private albumService: AlbunsService) { }

  ngOnInit(): void {
    this.albums$ = this.albumService.getAll().pipe(
      catchError(() => {
        this.albumError$ = of(true);
        return of([]);
      })
    )
  }

}
