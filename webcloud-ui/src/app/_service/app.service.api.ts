import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationServiceAPI {
    private baseURL = '';
    gauthenticationURL(){
        return this.baseURL +'/authentication';
    }
}