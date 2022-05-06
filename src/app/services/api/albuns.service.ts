import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumModel } from '@models/album.model';
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
}
