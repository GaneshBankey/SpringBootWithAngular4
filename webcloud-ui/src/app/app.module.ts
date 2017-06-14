import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouterModule } from './_config/app.router.module';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { AlertComponent } from './_directives/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './_login/login.component';
import { StockTypeAheadComponent } from './widget/stock.typeahead.component';

import { AppComponent }  from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { AuthenticationService, AlertService, TypeAheadService } from './_service/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AlertComponent,
        LoginComponent,
        DashboardComponent,
        StockTypeAheadComponent
    ],
    providers: [
        AlertService,
        AuthGuard,
        AuthenticationService,
        TypeAheadService,
        {   
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
