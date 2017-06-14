import { Component } from '@angular/core';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
    moduleId: module.id.toString(), 
    selector:'header-bar',
    templateUrl : './header.component.html',
    styles : ['./header.component.css']
})

export class HeaderComponent { 
    constructor( private authService: AuthenticationService) { }
    logout(){
        this.authService.logout();
    }
}