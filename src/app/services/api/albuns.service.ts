import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumModel, NewAlbumModel } from '@models/album.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(`${this.url}/albums`);
  }

  createAlbum(newAlbum: NewAlbumModel): Observable<any> {
    return this.httpClient.post<AlbumModel>(`${this.url}/albums`, { newAlbum });
  }

  updateAlbum(album: AlbumModel): Observable<any> {
    return this.httpClient.put<AlbumModel>(`${this.url}/albums/${album.id}`, { album });
  }

  removeAlbum(albumId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/albums/${albumId}`);
  }
}
