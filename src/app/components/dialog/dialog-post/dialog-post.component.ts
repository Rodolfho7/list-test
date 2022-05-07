import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsService } from '@services/api/posts.service';
import { Observable, catchError, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.scss']
})
export class DialogPostComponent {

  post: FormGroup;
  loading = false;
  postObservable: Observable<any> | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private postsService: PostsService
  ) {
    this.post = this.fb.group({
      title: [this.data?.title, Validators.required],
      body: [this.data?.body, Validators.required],
    });
  }

  closeDialog(save: boolean): void {
    if (!save) {
      this.dialogRef.close(save);
      return;
    }

    this.loading = true;

    let postData = {
      ...this.data,
      ...this.post.value
    };

    if (!this.data?.id) {
      postData = { ...postData, userId: 1 };
      this.postObservable = this.postsService.createPost(postData);
    } else {
      this.postObservable = this.postsService.updatePost(postData);
    }

    this.postObservable.pipe(
      take(1),
      tap(() => this.loading = false),
      tap((response) => this.dialogRef.close(response)),
      catchError(() => {
        this.loading = false;
        return of(null);
      })
    ).subscribe();
  }
}
