import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'postagens',
    pathMatch: 'full'
  },
  {
    path: 'postagens',
    loadChildren: () => import('./pages/postagens/postagens.module').then((m) => m.PostagensModule)
  },  {
    path: 'albuns',
    loadChildren: () => import('./pages/albums/albums.module').then((m) => m.AlbumsModule)
  },  {
    path: 'to-dos',
    loadChildren: () => import('./pages/todos/todos.module').then((m) => m.TodosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
