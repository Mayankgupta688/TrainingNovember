import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export default class DataSharedService {
   
   getDataObservable(): Observable<any> {
      return this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
   }

   constructor(private _http: HttpClient) {
   }
}