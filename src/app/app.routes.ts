import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/core/pages/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'post/:id',
    loadComponent: () =>
      import('../app/core/pages/post.component').then(m => m.PostComponent),
  },
  { path: '**', redirectTo: '' },
];
