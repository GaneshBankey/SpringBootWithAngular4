import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Security } from '../_models/security';

@Injectable()
export class TypeAheadService {
    private _url = 'http://localhost:9090/SpringAngular2/stock/api/getTicker/';
    constructor(private http: Http) { }

    typeAheadSearch(ticker: string): Observable<Security[]> {
        console.log('Search service called ', ticker);
        return this.http
            .get(`${this._url}/${ticker}`)
            .map(response => response.json().securities as Security[]);
    }
}