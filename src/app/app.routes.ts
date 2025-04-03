import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'login',
      loadChildren: () =>
        import('./login/login.routes').then((m) => m.LOGIN_ROUTES)
    },
    {
      path: '',
      loadChildren: () =>
        import('./main/main.routes').then((m) => m.MAIN_ROUTES)
    }
];
