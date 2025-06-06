import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell.component';

export const routes: Routes = [
    { 
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
            },
            {
                path: 'parts/:type',
                loadComponent: () => import('./pages/part-list/part-list.page').then(m => m.PartListPage)
            },
            { 
                path: 'build', 
                loadComponent: () => import('./pages/build-configurator/build-configurator.page').then(m => m.BuildConfiguratorPage) 
            }
        ]
    }
];
