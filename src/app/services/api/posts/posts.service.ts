import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewPostModel, PostModel } from '@models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${this.url}/posts`);
  }

  createPost(newPost: NewPostModel): Observable<any> {
    return this.httpClient.post<PostModel>(`${this.url}/posts`, { newPost });
  }

  updatePost(post: PostModel): Observable<any> {
    return this.httpClient.put<PostModel>(`${this.url}/posts/${post.id}`, { post });
  }

  removePost(postId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/posts/${postId}`);
  }
}
