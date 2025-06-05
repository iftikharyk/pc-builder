import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'parts/:type', loadComponent: () => import('./pages/part-list/part-list.page').then(m => m.PartListPage) },
];
