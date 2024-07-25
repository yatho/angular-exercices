import { Routes } from '@angular/router';
import { DataService } from '../data.service';
import { inject } from '@angular/core';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./page1.component').then((c) => c.Page1Component),
    resolve: {
      data: () => inject(DataService).getData(),
    },
    children: [
      {
        path: 'subpage1',
        loadComponent: () =>
          import('./subpage1/subpage1.component').then(
            (c) => c.Subpage1Component
          ),
      },
      {
        path: 'subpage2',
        loadComponent: () =>
          import('./subpage2/subpage2.component').then(
            (c) => c.Subpage2Component
          ),
      },
      {
        path: 'subpage3',
        loadComponent: () =>
          import('./subpage3/subpage3.component').then(
            (c) => c.Subpage3Component
          ),
      },
      {
        path: '**',
        redirectTo: 'subpage1',
        pathMatch: 'full',
      },
    ],
    title: 'PAGE 1',
  },
] as Routes;
