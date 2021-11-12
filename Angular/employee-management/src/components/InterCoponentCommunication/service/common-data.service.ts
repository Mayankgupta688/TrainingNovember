import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    "providedIn": "root"
})
export default class CommonDataService {
    commonEventHandler = new Subject<string>();
}