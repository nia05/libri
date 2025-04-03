import { Routes } from '@angular/router';

import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { MainComponent } from './core/components/main/main.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent},
    { path: '', component: MainComponent}
];
