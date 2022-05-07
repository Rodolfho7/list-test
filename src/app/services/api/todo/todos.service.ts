import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTodoModel, TodoModel } from '@models/to-do.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<TodoModel[]> {
    return this.httpClient.get<TodoModel[]>(`${this.url}/todos`);
  }

  createTodo(newPost: NewTodoModel): Observable<TodoModel> {
    return this.httpClient.post<TodoModel>(`${this.url}/todos`, { newPost });
  }

  updateTodo(post: TodoModel): Observable<TodoModel> {
    return this.httpClient.put<TodoModel>(`${this.url}/todos/${post.id}`, { post });
  }

  removeTodo(postId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/todos/${postId}`);
  }

  updateChecked(todoId: number, completed: boolean): Observable<TodoModel> {
    return this.httpClient.patch<TodoModel>(`${this.url}/todos/${todoId}`, { completed });
  }
}
