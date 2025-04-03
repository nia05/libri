import { Routes } from '@angular/router';
import { BookOverviewPageComponent } from './pages/book-overview-page/book-overview-page.component';

export const BOOKS_ROUTES: Routes = [
    {
        path: '',
        component: BookOverviewPageComponent,
    }
];
