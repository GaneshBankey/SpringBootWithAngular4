import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
import { AlertService } from '../_service/alert.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl : './login.component.html',
    styles : [ './login.component.css']
})
export class LoginComponent  implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private authService: AuthenticationService) { }
    ngOnInit() {
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password);
            // .subscribe(
            //     data => {
            //         this.router.navigate([this.returnUrl]);
            //     },
            //     error => {
            //         //this.alertService.error(error);
            //         console.log('Error ---> ', error);
            //         this.loading = false;
            //     });
            
             this.router.navigate([this.returnUrl]);
    }
} 