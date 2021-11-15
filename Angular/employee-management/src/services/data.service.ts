import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export default class DataService {
   employeeList = [{
        "id":"1",
        "createdAt":"2018-12-03T11:37:42.015Z",
        "name":"Ms. Gaylord Streich",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg",
        "currency": 100
     },
     {
        "id":"2",
        "createdAt":"2018-12-02T21:06:49.825Z",
        "name":"Roxanne Kunde",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg",
        "currency": 100
     },
     {
        "id":"3",
        "createdAt":"2018-12-03T03:37:39.995Z",
        "name":"Dante Spencer",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",
        "currency": 100
     },
     {
        "id":"4",
        "createdAt":"2018-12-03T11:07:34.261Z",
        "name":"Benny Hartmann",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg",
        "currency": 100
     },
     {
        "id":"5",
        "createdAt":"2018-12-03T11:38:36.583Z",
        "name":"Easton Fisher",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg",
        "currency": 100
     }
   ]; 

   sbiDataObservable: any = null;

   getDataObservable() {
      this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
   }

   constructor(private _http: HttpClient) {
      this.sbiDataObservable = new Observable<string>((subsciber: any) => {
         setInterval(() => {
             this._http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").subscribe((response: any) => {
               var sbiData = response.data.pricecurrent;
               this._http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").subscribe((nalcoResponse: any) => {
                  subsciber.next({
                     nalco: nalcoResponse.data.pricecurrent,
                     sbi: sbiData
                  })
               });
             }, (data) => {
                 console.log("Api Failed...")
             })
         }, 1000)
     })
   }
}