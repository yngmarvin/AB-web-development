import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'jorge', component: MainJorgeComponent
    },
];