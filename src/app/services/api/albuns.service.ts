import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '@models/album.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.url}/albums`);
  }
}
