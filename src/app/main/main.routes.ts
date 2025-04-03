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
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ],
    }
];
