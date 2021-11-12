import { Component } from "@angular/core";
import CommonDataService from "../service/common-data.service";

@Component({
    selector: "component-one",
    templateUrl: "component-one.component.html"
})
export default class ComponentOne  { 
    constructor(public _commonEvent: CommonDataService) {
        this._commonEvent.commonEventHandler.subscribe((data: any) => {
            debugger;
            var data = JSON.parse(data);
            if(data.originator ==  "Component Two") {
                alert(data.userName)
            }
        })
    }

    updateEventForComponentTwo() {
        var data = {
            originator: "Component One",
            userName: "Component One User Name"
        }

        this._commonEvent.commonEventHandler.next(JSON.stringify(data));
    }
}