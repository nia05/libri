import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
            },
            {
                path: 'books',
                loadChildren: () =>
                    import('./books/books.routes').then((m) => m.BOOKS_ROUTES),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('./settings/settings.routes').then((m) => m.SETTINGS_ROUTES),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: 'dashboard'
            }
        ],
    }
];
