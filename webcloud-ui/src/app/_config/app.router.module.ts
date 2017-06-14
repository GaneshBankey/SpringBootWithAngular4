import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../_login/login.component';

import { AuthGuard } from '../_guards/auth.guard';

const appRoutes: Routes = [
    { path: '',  component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule ({
   imports: [
       RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule { }