import { Component, OnInit } from '@angular/core';
import { PostModel } from '@models/post.model';
import { PostagensService } from '@services/api/postagens.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  posts$: Observable<PostModel[]> = of([]);
  postsError$: Observable<boolean> = of(false);

  constructor(private postService: PostagensService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll().pipe(
      catchError(() => {
        this.postsError$ = of(true);
        return of([]);
      })
    );
  }

}
