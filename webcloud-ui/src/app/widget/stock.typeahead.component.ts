import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { TypeAheadService, AlertService } from '../_service/index';
import { Security } from '../_models/security';

@Component({
    selector: 'stock-typeahead',
    moduleId: module.id.toString(),
    templateUrl: './stock.typeahead.component.html',
    styles: ['./stock.typeahead.component.css']
})

export class StockTypeAheadComponent implements OnInit {
    securities: Observable<Security[]>;
    private searchTicker = new Subject<string>();
    private isLoading = false;
    constructor(private stockTypeAheadService: TypeAheadService,
                private alertService: AlertService) { }
    // Push a search term into the observable stream.
    searchStockTicker(ticker: string): void {
        this.isLoading = true;
        console.log("searching .....", ticker);
        this.searchTicker.next(ticker);
    }
    ngOnInit(): void {
        this.securities = this.searchTicker
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(ticker => {
                    console.log('inside ticker ....', ticker);
                    this.isLoading = false;
                    if(ticker) 
                     return this.stockTypeAheadService.typeAheadSearch(ticker);
                     else
                     return Observable.of<Security[]>([])
             } )
            .catch(error => {
               // console.log(error);
                this.isLoading = false;
                this.alertService.error(error);
                return Observable.of<Security[]>([]);
            });

    }
}