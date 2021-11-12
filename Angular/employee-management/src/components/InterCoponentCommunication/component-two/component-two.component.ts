import { Component } from "@angular/core";
import { MaxLengthValidator } from "@angular/forms";
import CommonDataService from "../service/common-data.service";

@Component({
    selector: "component-two",
    templateUrl: "component-two.component.html"
})
export default class ComponentTwo  { 
    constructor(public _commonEvent: CommonDataService) {
        this._commonEvent.commonEventHandler.subscribe((data: any) => {
            var data = JSON.parse(data);
            if(data.originator ==  "Component One") {
                alert(data.userName)
            }
        })
    }

    updateEventForComponentOne() {
        var data = {
            originator: "Component Two",
            userName: "Component Two User Name"
        }
        
        this._commonEvent.commonEventHandler.next(JSON.stringify(data));
    }
}