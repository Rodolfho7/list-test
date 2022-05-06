import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '@models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${this.url}/posts`);
  }
}
