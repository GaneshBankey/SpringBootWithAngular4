import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    private dataStore = localStorage ;  // This is where we will store our data in memory
    // Using Angular DI we use the HTTP service
    constructor(private http: Http) {

    }
    login(username: string, password: string) {
        // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //            this.dataStore.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
        this.dataStore.setItem('currentUser', JSON.stringify({ username: username, password: password }));
    }

    logout() {
        // remove user from local storage to log user out
         this.dataStore.removeItem('currentUser');
    }
    getLocalDataStroe(){
        return this.dataStore;
    }
}