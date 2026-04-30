import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './features/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'details',
        loadComponent: () => import('./features/pages/details/details').then((m) => m.Details),
      },
    ],
  },
];
