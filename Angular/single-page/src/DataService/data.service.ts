import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export default class DataService implements Resolve<any> {

    constructor(private _http: HttpClient) { }
    
    resolve() {
        return this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
    }
}