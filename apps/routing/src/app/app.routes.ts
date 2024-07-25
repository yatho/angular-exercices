import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.routes'),
  },
  {
    path: 'page2',
    canActivate: [() => false],
    loadComponent: () =>
      import('./page2/page2.component').then((m) => m.Page2Component),
  },
  {
    path: 'page3',
    loadComponent: () =>
      import('./page3/page3.component').then((m) => m.Page3Component),
  },
  {
    path: '**',
    redirectTo: '/page1',
    pathMatch: 'full',
  },
];
