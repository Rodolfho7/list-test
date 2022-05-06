import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagensComponent } from './postagens.component';

const routes: Routes = [
  {
    path: '',
    component: PostagensComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagensRoutingModule { }
