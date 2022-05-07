import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from '@components/dialog/dialog-post/dialog-post.component';
import { PostModel } from '@models/post.model';
import { PostsService } from '@services/api/posts.service';
import { catchError, Observable, of } from 'rxjs';
import { take, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  posts$: Observable<PostModel[]> = of([]);
  postsError$: Observable<boolean> = of(false);

  constructor(
    private postService: PostsService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.posts$ = this.postService.getAll().pipe(
      catchError(() => {
        this.postsError$ = of(true);
        return of([]);
      })
    );
  }

  openDialog(data: PostModel | null = null): void {
    this.dialog.open(DialogPostComponent, {
      width: '500px',
      data
    }).afterClosed().pipe(
      take(1),
      filter((save) => save),
      tap(() => this.getAllPosts())
    ).subscribe();
  }

  addPost(): void {
    this.openDialog();
  }

  onEdit(post: PostModel): void {
    this.openDialog(post);
  }

  onRemove(postId: number): void {
    this.postService.removePost(postId);
  }
}
