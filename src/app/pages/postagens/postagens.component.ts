import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from '@components/dialog/dialog-post/dialog-post.component';
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

  constructor(
    private postService: PostagensService,
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

  addPost(): void {
    this.dialog.open(DialogPostComponent, {
      width: '500px'
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.getAllPosts();
      }
    });
  }

  onEdit(post: PostModel): void {

  }

  onRemove(post: PostModel): void {
    
  }
}
