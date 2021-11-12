import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import DataService from "src/services/data.service";

@Component({
    selector: "sbi-stock",
    templateUrl: "stock-data.component.html"
})
export default class StockDataComponent {
    sbiStockValue = 0;
    nalcoStockPrice = 0;
    sbiDataObservable: Observable<string> = null;
    constructor(private _dataServide: DataService) {
        this._dataServide.sbiDataObservable.subscribe((response: any) => {
            this.sbiStockValue = response.sbi;
            this.nalcoStockPrice = response.nalco;
        })
    }
}